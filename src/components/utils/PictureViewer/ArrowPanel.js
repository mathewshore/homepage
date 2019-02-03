import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import LeftArrowIcon from '@material-ui/icons/ChevronLeft';
import RightArrowIcon from '@material-ui/icons/ChevronRight';


const styles = theme => ({
    imageToggler: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '10%', // ToDo: define media screen based widths. 
        height: '100%',
        cursor: 'pointer',

        transition: 'all 0.3s, visibility 0s linear, opacity 0.3s linear',
        background: 'rgba(0, 0, 0, 0.1)',
        color: 'rgba(0, 0, 0, 0.5)',
        visibility: 'visible',
        opacity: 1,

        position: 'absolute',
        top: 0,

        '&.previous': {
            left: 0,
        },
        '&.next': {
            right: 0,
        },

        '&:hover': {
            background: 'rgba(0, 0, 0, 0.4)',
            color: 'white',
        },
        '&.hidden': {
            visibility: 'hidden',
            opacity: 0,
        },
    },
    togglerArrowIcon: {
        fontSize: 'calc(3vw + 3vh)',
    },
});

const ArrowPanel = props => {
    const { classes, direction } = props;
    const panelClassName = `${classes.imageToggler} ${direction}${props.hidden ? ' hidden' : ''}`;
    const ArrowIcon = direction === 'previous' ? LeftArrowIcon : RightArrowIcon;

    return (
        <div className={panelClassName} onClick={props.onClick}>
            <ArrowIcon className={classes.togglerArrowIcon}/>
        </div>
    );
};

ArrowPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.oneOf(['previous', 'next']).isRequired,
    hidden: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(ArrowPanel);
