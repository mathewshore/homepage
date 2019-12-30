import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, breakpoints }) => ({
    fieldLabelContainer: {
        display: 'flex',
        alignItems: 'center',
        [breakpoints.up('xl')]: {
            fontSize: 32
        }
    },
    requiredTextContainer: {
        fontStyle: 'italic',
        fontSize: 14,
        marginLeft: spacing.unit,
        marginTop: 4,

        [breakpoints.up('xl')]: {
            fontSize: 20,
            marginLeft: spacing.unit * 2,
            marginTop: 6,
        }
    }
});

const FieldLabel = props => {
    const { classes } = props;

    return (
        <div className={classes.fieldLabelContainer}>
            {props.label}
            {props.isRequired && (
                <div className={classes.requiredTextContainer}>
                    required
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
