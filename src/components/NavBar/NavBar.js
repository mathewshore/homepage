import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import join from 'lodash/join';
import map from 'lodash/map';
import isNil from 'lodash/isNil';
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


const styles = ({ spacing, palette, shadows, breakpoints }) => ({
    navBarContainer: {
        zIndex: Z_INDEX.NAV_BAR,
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',

        transition: 'all 0.3s',
        background: palette.background.navBar,
        boxShadow: shadows[5]
    },
    navContent: {
        display: 'flex',
        alignItems: 'center',
        height: spacing.unit * 9,
        transition: 'height 0.5s ease',

        [breakpoints.up('xs')]: {
            padding: `0 ${spacing.unit * 3}px`
        },
        [breakpoints.up('sm')]: {
            padding: `0 ${spacing.unit * 6}px`
        },
        [breakpoints.up('md')]: {
            padding: `0 ${spacing.unit * 8}px`,
            height: spacing.unit * 10
        },
        [breakpoints.up('lg')]: {
            padding: `0 ${spacing.unit * 10}px`,
            height: spacing.unit * 12
        },
        [breakpoints.up('xl')]: {
            padding: `0 ${spacing.unit * 12} px`,
            height: spacing.unit * 16
        },

        '&.dense': {
            height: spacing.unit * 7.5,

            [breakpoints.up('md')]: {
                height: spacing.unit * 8.5
            },
            [breakpoints.up('lg')]: {
                height: spacing.unit * 9
            },
            [breakpoints.up('xl')]: {
                height: spacing.unit * 13
            }
        }
    }
});

const sectionIds = map(SECTIONS, section => section);

const getSectionActivationOffset = () => {
    // ToDo: Scale offset according to mediascreens.
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

const scrollIntoElement = elementId => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ block: 'center' });
    }
};

const NavBar = props => {
    const { classes } = props;
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => setActiveSection(getActiveSection());

    useEffect(() => {
        const elementId = window.location.hash.split('#')[1];
        if (elementId) {
            scrollIntoElement(elementId);
            setActiveSection(getActiveSection());
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = includes(['xs', 'sm'], props.width);
    const NavLinksContainer = isMobile ? MobileNavMenu : NavLinks;
    const isDense = !isNil(activeSection);

    const navContentClassNames = [classes.navContent];
    if (isDense) {
        navContentClassNames.push('dense');
    }

    return (
        <div className={classes.navBarContainer}>
            <Container>
                <div className={join(navContentClassNames, ' ')}>
                    <NavLogo dense={isDense} />
                    <NavLinksContainer dense={isDense}>
                        {/* Remove Intro section link from nav. */}
                        {map(pull(sectionIds, SECTIONS.INTRO), (id, i) => (
                            <NavLink
                                key={id}
                                isMobile={isMobile}
                                first={i === 0}
                                linkTo={id}
                                text={id}
                                isActive={id === activeSection}
                                dense={isDense}
                            />
                        ))}
                    </NavLinksContainer>
                </div>
            </Container>
        </div>
    );
};

NavBar.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string
};

export default withWidth()(withStyles(styles)(NavBar));
