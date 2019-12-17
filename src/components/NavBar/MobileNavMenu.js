import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from '../common/Backdrop';
import { Z_INDEX } from '../constants';


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
        top: (spacing.unit * 7.5) - 2, 
        // ToDo: Set mediascreen based right position according to different paddings (?)
        right: spacing.unit * -1.5,
        background: palette.background.navBar,
        borderRadius: 2
    },
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
        // ToDo: Render different menu icon for open & closed states.

        return (
            <div className={classes.menuContainer}>
                <div className={classes.menuDropDown}>
                    <MenuIcon
                        className={classes.menuIcon}
                        onClick={this.onMenuToggleClick}
                    />
                    {isOpen && (
                        <div className={classes.menuList}>
                            {this.props.children}
                        </div>
                    )}
                </div>
                {isOpen && <Backdrop onClick={this.onMenuToggleClick} />}
            </div>
        );
    }
}

export default withStyles(styles)(MobileNavMenu);
