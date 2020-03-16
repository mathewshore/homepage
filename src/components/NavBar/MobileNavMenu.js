import React, { useState } from 'react';
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

const MobileNavMenu = props => {
    const { classes } = props;
    const [isOpen, setOpenMenu] = useState(false);

    const onMenuToggleClick = () => setOpenMenu(!isOpen);

    return (
        <div className={classes.menuContainer}>
            <div className={classes.menuDropDown}>
                <MenuIcon
                    isOpen={isOpen}
                    onClick={onMenuToggleClick}
                />
                <MobileNavMenuList
                    isOpen={isOpen}
                    dense={props.dense}
                >
                    {props.children}
                </MobileNavMenuList>
            </div>
            {isOpen && <Backdrop onClick={onMenuToggleClick} />}
        </div>
    );
};

MobileNavMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    dense: PropTypes.bool,
    children: PropTypes.any,
};

export default withStyles(styles)(MobileNavMenu);
