import React, { Component } from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from '../common/Backdrop';
import { Z_INDEX } from '../constants';


const styles = ({ palette, spacing, shadows }) => ({
    menuContainer: {
        width: '100%',
        display: 'flex'
    },
    menuDropDown: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: Z_INDEX.MOBILE_NAV_MENU
    },
    menuIcon: {
        fontSize: 40,
        cursor: 'pointer',
        color: palette.text.header.light,
        '&:hover': {
            color: palette.primary.main
        }
    },
    menuList: {
        // Todo: adjust menu-list location based on density of nav
        padding: spacing.unit * 1.5,
        display: 'block',
        position: 'absolute',
        top: (spacing.unit * 8.5) - 2,
        right: spacing.unit * -3,
        background: palette.background.navBar,
        borderRadius: 2,
        boxShadow: shadows[10],
        transition: 'all 0.4s ease',
        '&.dense': {
            top: spacing.unit * 7.5,
        }
    },
    menuListArrow: {
        position: 'absolute',
        top: -9,
        right: 30,
        borderLeft: '14px solid transparent',
        borderRight: '14px solid transparent',
        borderBottom: `16px solid ${palette.background.navBar}`,
    }
});

class MobileNavMenu extends Component {
    state = {
        isOpen: false
    };

    onMenuToggleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        // ToDo: Update to react version with state hooks and use it here.
        const { classes } = this.props;
        const { isOpen } = this.state;

        const menuListClassNames = [classes.menuList];
        if (isOpen) {
            menuListClassNames.push('visible');
        }
        if (this.props.dense) {
            menuListClassNames.push('dense');
        }
        // ToDo: Render different menu icon for open & closed states.

        return (
            <div className={classes.menuContainer}>
                <div className={classes.menuDropDown}>
                    <MenuIcon
                        className={classes.menuIcon}
                        onClick={this.onMenuToggleClick}
                    />
                    {isOpen && (
                        <div className={join(menuListClassNames, ' ')}>
                            <div className={classes.menuListArrow} />
                            {this.props.children}
                        </div>
                    )}
                </div>
                {isOpen && <Backdrop onClick={this.onMenuToggleClick} />}
            </div>
        );
    }
}

MobileNavMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    dense: PropTypes.bool,
    children: PropTypes.any,
};

export default withStyles(styles)(MobileNavMenu);
