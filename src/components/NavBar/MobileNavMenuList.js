import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, palette, shadows }) => ({
    menuList: {
        display: 'block',
        background: palette.background.navBar,
        borderRadius: 2,
        boxShadow: shadows[10],
        position: 'absolute',
        
        top: spacing.unit * 5,
        right: 0,
        padding: 0,
        height: 0,
        width: 0,
        transition: 'all 0.3s ease',
        '&.visible': {
            top: (spacing.unit * 8.5) - 2,
            right: (spacing.unit * -3) - 3,
            padding: spacing.unit * 1.5,
            height: 'auto',
            width: 'auto',
        },
        '&.dense': {
            top: spacing.unit * 4,
            '&.visible': {
                top: spacing.unit * 7.5
            }
        }
    },
    menuListArrow: {
        position: 'absolute',
        borderLeft: 0,
        borderRight: 0,
        borderBottom: 0,
        top: 0,
        right: 0,
        transition: 'all 0.3s ease',
        '&.visible': {
            top: -9,
            right: 30,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderBottom: `16px solid ${palette.background.navBar}`,
        }
    }
});

const MobileNavMenuList = props => {
    const { classes } = props;
    const menuListClassNames = [classes.menuList];
    const menuListArrowClassNames = [classes.menuListArrow];
    if (props.isOpen) {
        menuListClassNames.push('visible');
        menuListArrowClassNames.push('visible');
    }
    if (props.dense) {
        menuListClassNames.push('dense');
    }

    return (
        <div className={join(menuListClassNames, ' ')}>
            <div className={join(menuListArrowClassNames, ' ')} />
            {props.isOpen && props.children}
        </div>
    )
};

MobileNavMenuList.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    children: PropTypes.any
};

export default withStyles(styles)(MobileNavMenuList);
