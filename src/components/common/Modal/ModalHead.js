import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


const styles = ({ spacing, breakpoints }) => ({
    modalHead: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: spacing.unit * 10,
        padding: `${spacing.unit * 1.5}px ${spacing.unit * 5}px ${spacing.unit}px`,
        width: `calc(100% - ${spacing.unit * 5 * 2}px)`,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid black',

        [breakpoints.down('md')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 3}px ${spacing.unit}px`,
            width: `calc(100% - ${spacing.unit * 3 * 2}px)`,
        },
        [breakpoints.down('sm')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 1.5}px ${spacing.unit}px`,
            width: `calc(100% - ${spacing.unit * 1.5 * 2}px)`,
        },
    },
    closeButton: {
        marginLeft: 'auto',
    },
    closeIcon: {
        fontSize: spacing.unit * 6
    },
    modalCaption: {
        marginTop: spacing.unit,
    },
});

const ModalHead = props => {
    const { classes } = props;
    return (
        <div className={classes.modalHead}>
            {/* ToDo: Increase close button size. */}
            <div>
                <Typography variant='display1'>
                    {props.title}
                </Typography>
                <Typography variant='caption' className={classes.modalCaption}>
                    {props.description}
                </Typography>
            </div>
            <IconButton className={classes.closeButton} onClick={props.onClose}>
                <CloseIcon className={classes.closeIcon} />
            </IconButton>
        </div>
    );
};

ModalHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(ModalHead);