import React from 'react';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import NavLinks from './NavLinks';
import { Z_INDEX } from '../constants';
import NavLink from './NavLink';

const styles = ({ palette, spacing }) => ({
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
        cursor: 'pointer'
    },
    menuList: {
        display: 'block',
        position: 'absolute',
        top: spacing.unit * 7.5,
        // ToDo: set mediascreen based right position according to different paddings
        right: 0,
        background: palette.background.navBar,
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: Z_INDEX.MOBILE_NAV_MENU_BACKDROP
    }
});

const MobileNavMenu = props => {
    const { classes, isOpen } = props;
    // ToDo: Render different menu icon for open & closed states.
    return (
        <div className={classes.menuContainer}>
            <div className={classes.menuDropDown}>
                <MenuIcon
                    className={classes.menuIcon}
                    onClick={props.onMenuToggleClick}
                />
                {isOpen && (
                    <div className={classes.menuList}>
                        {map(props.sectionIds, id => (
                            <NavLink
                                isMobile
                                key={id}
                                linkTo={id}
                                text={id}
                                isActive={id === props.activeSection}
                                withDarkColor={process.withDarkLinks}
                            />
                        ))}
                    </div>
                )}
            </div>
            {isOpen && (
                <div
                    className={classes.backdrop}
                    onClick={props.onMenuToggleClick}
                />
            )}
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(MobileNavMenu);
