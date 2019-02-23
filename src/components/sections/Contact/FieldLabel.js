import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
    fieldLabelContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    requiredTextContainer: {
        fontSize: 14,
        marginLeft: theme.spacing.unit
    }
});

const FieldLabel = props => {
    const { classes, label, isRequired } = props;

    return (
        <div className={classes.fieldLabelContainer}>
            {label}
            {isRequired && (
                <div className={classes.requiredTextContainer}>
                    (required)
                </div>
            )}
        </div>
    );
};

FieldLabel.propTypes = {
    classes: PropTypes.object.isRequired,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
};

export default withStyles(styles)(FieldLabel);
