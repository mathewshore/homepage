import React, { Component } from 'react';
import map from 'lodash/map';
import last from 'lodash/last';
import pull from 'lodash/pull';
import findIndex from 'lodash/findIndex';

import withStyles from '@material-ui/core/styles/withStyles';
import Hidden from '@material-ui/core/Hidden';

import Container from '../common/Container';
import { SECTIONS, Z_INDEX } from '../constants';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';
import MobileNavMenu from './MobileNavMenu';


const styles = (theme) => ({
    navBarContainer: {
        zIndex: Z_INDEX.NAV_BAR,
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',

        transition: 'all 0.3s',
        background: theme.palette.transparent,
        boxShadow: 'none',
        '&.highlight': {
            background: theme.palette.background.navBar,
            boxShadow: theme.shadows[5]
        }
    },
    navContent: {
        display: 'flex',
        height: theme.spacing.unit * 10,
        alignItems: 'center',
        padding: `0 ${theme.spacing.unit * 6}px`,

        // [theme.breakpoints.up('xs')]: {
        //     padding: `0 ${theme.spacing.unit * 4}px`,
        // },
        // [theme.breakpoints.up('sm')]: {
        //     padding: `0 ${theme.spacing.unit * 6}px`,
        // },
        // [theme.breakpoints.up('md')]: {
        //     padding: `0 ${theme.spacing.unit * 8}px`,
        // },
        // [theme.breakpoints.up('lg')]: {
        //     padding: `0 ${theme.spacing.unit * 10}px`,
        // },
    }
});

const sectionIds = map(SECTIONS, section => section);

const getSectionActivationOffset = () => {
    // ToDo: Scale offset according to mediascreen.
    return 200;
};

const getActiveSection = () => {
    const currentLocation = window.scrollY;
    const nextSectionIndex = findIndex(sectionIds, id => {
        // Recalculate locations because element position changes whenever browser window is resized.
        const sectionLocation = document.getElementById(id).offsetTop;
        // Use offset to define how early navlink corresponding to section is highlighted.
        const sectionActivationOffset = getSectionActivationOffset();
        return (sectionLocation - sectionActivationOffset) > currentLocation;
    });
    const isLastSection = nextSectionIndex === -1;
    return isLastSection ? last(sectionIds) : sectionIds[nextSectionIndex - 1];
};

const shouldNavBarHighlight = () => {
    const currentLocation = window.scrollY;
    return currentLocation > 150;
};

class NavBar extends Component {
    state = {
        activeSection: null,
        navBarHighlighted: null,
        mobileMenuIsOpen: false
    };

    componentDidMount() {
        this.setState({
            activeSection: getActiveSection(),
            navBarHighlighted: shouldNavBarHighlight()
        });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            activeSection: getActiveSection(),
            navBarHighlighted: shouldNavBarHighlight()
        });
    };

    toggleMobileMenu = () => {
        this.setState({ mobileMenuIsOpen: !this.state.mobileMenuIsOpen });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={`${classes.navBarContainer}${this.state.navBarHighlighted ? ' highlight' : ''}`}>
                {/* <Container> */}
                    <div className={classes.navContent}>
                        <NavLogo />
                        <Hidden mdUp>
                            <MobileNavMenu
                                isOpen={this.state.mobileMenuIsOpen}
                                sectionIds={pull(sectionIds, SECTIONS.INTRO)}
                                activeSection={this.state.activeSection}
                                onMenuToggleClick={this.toggleMobileMenu}
                            />
                        </Hidden>
                        <Hidden smDown>
                            <NavLinks // Remove intro section from nav links.
                                sectionIds={pull(sectionIds, SECTIONS.INTRO)}
                                activeSection={this.state.activeSection}
                                withDarkLinks={!this.state.navBarHighlighted}
                            />
                        </Hidden>
                    </div>
                {/* </Container> */}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NavBar);
