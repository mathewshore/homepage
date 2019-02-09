import React, { Component } from 'react';
import map from 'lodash/map';
import last from 'lodash/last';
import findIndex from 'lodash/findIndex';
import withStyles from '@material-ui/core/styles/withStyles';

import NavLinks from './NavLinks';
import NavLogo from './NavLogo';
import Container from '../common/Container';
import { SECTIONS } from '../constants';


const styles = (theme) => ({
    navBarContainer: {
        ...theme.navBarContainer,
        top: 0,

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

const shouldNavBarHighlight = () => {
    const currentLocation = window.scrollY;
    return currentLocation > 150;
};

class NavBar extends Component {
    state = {
        activeSection: getActiveSection(),
        navBarHighlighted: shouldNavBarHighlight()
    };

    // Todo: add window location listener to App and use it to highlight active link.
    componentDidMount() {
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

    render() {
        const { classes } = this.props;

        return (
            <div className={`${classes.navBarContainer}${this.state.navBarHighlighted ? ' highlight' : ''}`}>
                <Container>
                    <div className={classes.navContent}>
                        <NavLogo />
                        <NavLinks
                            sectionIds={sectionIds}
                            activeSection={this.state.activeSection}
                            withDarkLinks={!this.state.navBarHighlighted}
                        />
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NavBar);
