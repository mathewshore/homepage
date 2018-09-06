import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';

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


class NavLogo extends Component {
    render() {
        const { classes, drawerIsOpen } = this.props;

        return (
            <span className={classes.navWrapper}>
                <a
                    className={classes.menuToggler}
                    href='/#/'
                    onClick={this.props.toggleLeftDrawer}
                >
                    {drawerIsOpen ? <CloseIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
                    <span className={classes.menuBrand}>
                        <span className={classes.firstLetter}>M</span>
                        <span className={classes.remainingLetters + (drawerIsOpen ? ' show' : '')}>atias</span>
                        <span className={classes.firstLetter}>R</span>
                        <span className={classes.remainingLetters + (drawerIsOpen ? ' show' : '')}>anta</span>
                    </span>
                </a>
            </span>
        );
    }
}

NavLogo.propTypes = {
    classes: PropTypes.object,
    toggleLeftDrawer: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(NavLogo);
