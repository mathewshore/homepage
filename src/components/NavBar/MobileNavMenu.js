import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import NavLinks from './NavLinks';


const styles = theme => ({
    menuContainer: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    menuIcon: {
        fontSize: 40,
        cursor: 'pointer'
    }
});

const MobileNavMenu = props => {
    const { classes, isOpen } = props;
    // ToDo: Render different menu icon for open & closed states.
    return (
        <div className={classes.menuContainer}>
            <MenuIcon
                className={classes.menuIcon}
                onClick={props.onMenuToggleClick}
            />
            {isOpen && (
                <NavLinks
                    isMobile
                    withDarkLinks
                    sectionIds={props.sectionIds}
                    activeSection={props.activeSection}
                />
            )}
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(MobileNavMenu);
