import React, { Component } from 'react';
import map from 'lodash/map';
import last from 'lodash/last';
import includes from 'lodash/includes';
import pull from 'lodash/pull';
import findIndex from 'lodash/findIndex';

import withStyles from '@material-ui/core/styles/withStyles';
import withWidth from '@material-ui/core/withWidth';

import Container from '../common/Container';
import { SECTIONS, Z_INDEX } from '../constants';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import NavLogo from './NavLogo';
import MobileNavMenu from './MobileNavMenu';


const styles = theme => ({
    navBarContainer: {
        zIndex: Z_INDEX.NAV_BAR,
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',

        transition: 'all 0.3s',
        background: theme.palette.background.navBar,
        boxShadow: theme.shadows[5]
    },
    navContent: {
        display: 'flex',
        height: theme.spacing.unit * 10,
        alignItems: 'center',

        [theme.breakpoints.up('xs')]: {
            padding: `0 ${theme.spacing.unit * 4}px`,
        },
        [theme.breakpoints.up('sm')]: {
            padding: `0 ${theme.spacing.unit * 6}px`,
        },
        [theme.breakpoints.up('md')]: {
            padding: `0 ${theme.spacing.unit * 8}px`,
        },
        [theme.breakpoints.up('lg')]: {
            padding: `0 ${theme.spacing.unit * 10}px`,
        },
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

class NavBar extends Component {
    state = { activeSection: null };

    componentDidMount() {
        this.setState({ activeSection: getActiveSection() });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ activeSection: getActiveSection() });
    };

    render() {
        const { classes } = this.props;
        const isMobile = includes(['xs', 'sm'], this.props.width);
        const NavLinksContainer = isMobile ? MobileNavMenu : NavLinks;

        return (
            <div className={classes.navBarContainer}>
                <Container>
                    <div className={classes.navContent}>
                        <NavLogo />
                        <NavLinksContainer>
                            {/* Intro section link is not rendered in nav. */}
                            {map(pull(sectionIds, SECTIONS.INTRO), (id, i) => (
                                <NavLink
                                    key={id}
                                    isMobile={isMobile}
                                    first={i === 0}
                                    linkTo={id}
                                    text={id}
                                    isActive={id === this.state.activeSection}
                                />
                            ))}
                        </NavLinksContainer>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withWidth()(withStyles(styles)(NavBar));
