import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/CheckCircle';


const styles = ({ spacing }) => ({
    checkIcon: {
        marginLeft: spacing.unit,
        marginTop: spacing.unit * -0.25
    }
});

const SendButtonContent = props => {
    if (props.isSending) {
        return 'Sending Message';
    }
    if (props.wasSent) {
        return (
            <Fragment>
                Message was sent
                <CheckIcon className={props.classes.checkIcon} />
            </Fragment>
        );
    }
    return 'Send Message';
};

SendButtonContent.propTypes = {
    classes: PropTypes.object.isRequired,
    isSending: PropTypes.bool,
    wasSent: PropTypes.bool
};

export default withStyles(styles)(SendButtonContent);
