import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import zIndex from '../zIndex';


const styles = theme => ({
    navWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: zIndex.navigation,
        textTransform: 'uppercase',
    },
    menuToggler: {
        display: 'flex',
        margin: theme.spacing.unit * 2,
        position: 'relative',
        borderRadius: 4,
        padding: '4px 8px 4px 6px',
        transition: 'all 0.3s',
        color: theme.palette.text.header.dark,

        '&:hover': {
            color: theme.palette.text.header.light,
            textDecoration: 'none',
            background: 'rgba(0, 0, 0, 0.3)',
            '&.show': {
                color: theme.palette.text.header.light,
            },
        },
        '&.show': {
            color: theme.palette.text.header.light,
        },
    },
    menuIcon: {
        fontSize: 39,
    },
    menuBrand: {
        fontSize: 31,
        marginLeft: theme.spacing.unit,
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
        const iconProps = { className: classes.menuIcon };
        const remainingLettersClassName = classes.remainingLetters + (drawerIsOpen ? ' show' : '');

        return (
            <span className={classes.navWrapper}>
                <a
                    className={classes.menuToggler + (drawerIsOpen ? ' show' : '')}
                    href='/#/'
                    onClick={this.props.toggleLeftDrawer}
                >
                    {drawerIsOpen ? <CloseIcon {...iconProps} /> : <MenuIcon {...iconProps} />}
                    <span className={classes.menuBrand}>
                        M<span className={remainingLettersClassName}>atias</span>
                        R<span className={remainingLettersClassName}>anta</span>
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
