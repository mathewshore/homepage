import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Backdrop from '../common/Backdrop';
import { Z_INDEX } from '../constants';
import MenuIcon from './MenuIcon';
import MobileNavMenuList from './MobileNavMenuList';


const styles = ({
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

        return (
            <div className={classes.menuContainer}>
                <div className={classes.menuDropDown}>
                    <MenuIcon
                        isOpen={isOpen}
                        onClick={this.onMenuToggleClick}
                    />
                    <MobileNavMenuList
                        isOpen={isOpen}
                        dense={this.props.dense}
                    >
                        {this.props.children}
                    </MobileNavMenuList>
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
