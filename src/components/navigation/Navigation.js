import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import NavLinks, { LINK_BlOCK_UNMOUNT_DELAY } from './NavLinks';

import zIndex from '../zIndex';


const styles = theme => ({
    navWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        // width: 240,
        zIndex: zIndex.navigation,
        textTransform: 'uppercase',
    },
    menuToggler: {
        display: 'block',
        margin: '18px',
        position: 'relative',
        height: 40,
        // width: 244,

        '&:hover': {
            color: 'purple',
            textDecoration: 'none',
            // transform: 'scale(1.1)',
        },
    },
    menuIcon: {
        fontSize: 44,
        position: 'absolute',
        left: 0,
        // height: 'auto',
        // marginLeft: -35,
        // marginRight: 12,
        // transition: 'ease 0.3s',
    },
    menuBrand: {
        fontSize: 28,
        position: 'absolute',
        top: 1,
        left: 48,
    },
    firstLetter: {
        opacity: 1,
    },
    remainingLetters: {
        transition: 'all 0.3s',
        opacity: 0,
        fontSize: 0,
        '&.show': {
            opacity: 1,
            fontSize: 22,
        }
    }
});


class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            linksShown: false,
            linkBlockWillClose: true,
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setBrandHoveredState = this.setBrandHoveredState.bind(this);
    }

    toggleDrawer(linksShown) {
        let linkBlockWillClose;
        if (!linksShown) {
            setTimeout(() => this.setState({ linksShown }), LINK_BlOCK_UNMOUNT_DELAY);
            linkBlockWillClose = true;
        } else {
            this.setState({ linksShown });
            linkBlockWillClose = false;
        }
        this.setState({ linkBlockWillClose });
    }

    setBrandHoveredState(brandIsHovered) {
        this.setState({ brandIsHovered });
    }

    render() {
        const { classes } = this.props;
        const { linksShown, linkBlockWillClose, brandIsHovered } = this.state;

        return (
            <span className={classes.navWrapper}>
                <a
                    className={classes.menuToggler}
                    href='/#/'
                    onClick={() => this.toggleDrawer(!linksShown)}
                    onMouseEnter={() => this.setBrandHoveredState(true)}
                    onMouseLeave={() => this.setBrandHoveredState(false)}
                >
                    {linksShown ? <CloseIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
                    <span className={classes.menuBrand}>
                        <span className={classes.firstLetter}>M</span>
                        <span className={classes.remainingLetters + (brandIsHovered ? ' show' : '')}>atias</span>
                        <span className={classes.firstLetter}>R</span>
                        <span className={classes.remainingLetters + (brandIsHovered ? ' show' : '')}>anta</span>
                    </span>
                </a>
                {linksShown && <NavLinks willClose={linkBlockWillClose} />}
            </span>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Navigation);
