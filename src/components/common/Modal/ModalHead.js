import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ModalSpacingContainer from './ModalSpacingContainer';


const styles = ({ palette, spacing }) => ({
    modalHead: {
        background: palette.primary.light,
        // height: spacing.unit * 10,
        display: 'flex',
        alignItems: 'center',
        width: '100%'
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
            <ModalSpacingContainer>
                <Typography variant='display1'>
                    {props.title}
                </Typography>
                <IconButton
                    className={classes.closeButton}
                    onClick={props.onClose}
                >
                    <CloseIcon className={classes.closeIcon} />
                </IconButton>
            </ModalSpacingContainer>
        </div>
    );
};

ModalHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(ModalHead);