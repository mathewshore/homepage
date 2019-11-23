import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = ({ spacing, palette }) => ({
    messageBannerContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: `${spacing.unit}px ${spacing.unit * 3}px`,
        borderRadius: 2,
        opacity: 0,
        height: 0,
        transition: 'all 0.5s ease',

        '&.info': {
            backgroundColor: palette.info.light,
            color: palette.info.main
        },
        '&.success': {
            backgroundColor: palette.success.light,
            color: palette.success.main
        },
        '&.danger': {
            backgroundColor: palette.danger.light,
            color: palette.danger.main
        },
        '&.shown': {
            opacity: 1,
            height: 'auto'
        }
    },
    closeButtonRoot: {
        marginLeft: 'auto',
        backgroundColor: 'inherit',
        color: 'inherit'
    }
});

const MessageBanner = props => {
    const { classes } = props;
    const classNames = [
        classes.messageBannerContainer,
        props.type
    ];
    if (props.children) {
        classNames.push('shown');
    }

    return (
        <div className={join(classNames, ' ')}>
            {props.children}
            <IconButton
                onClick={props.onClose}
                classes={{ root: classes.closeButtonRoot }}
            >
                <CloseIcon />
            </IconButton>
        </div>
    );
};

MessageBanner.defaultProps = {
    type: 'info'
};

MessageBanner.propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(MessageBanner);
