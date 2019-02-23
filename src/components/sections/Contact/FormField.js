import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import withStyles from "@material-ui/core/styles/withStyles";
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FieldLabel from './FieldLabel';


const styles = ({ spacing, shadows }) => ({
    inputLabelRoot: {
        fontSize: 20,
        marginBottom: spacing.unit * 0.5,
        position: 'relative'
    },
    inputTextFieldRoot: {
        marginTop: '0 !important',
        '&:before': {
            borderBottom: 0,
        },
    },
    inputTextFieldInput: {
        borderRadius: 2,
        boxShadow: shadows[1],
        padding: `${spacing.unit}px ${spacing.unit * 0.5}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    inputTextFieldMultiline: {
        padding: 0
    }
});

const FormField = props => {
    const { classes, label, isRequired } = props;
    return (
        <FormGroup>
            <TextField
                {...omit(props, ['classes', 'label', 'isRequired'])}
                label={<FieldLabel label={label} isRequired={isRequired} />}
                InputLabelProps={{
                    ...props.InputLabelProps,
                    classes: {
                        root: classes.inputLabelRoot
                    }
                }}
                InputProps={{
                    classes: {
                        root: classes.inputTextFieldRoot,
                        input: classes.inputTextFieldInput,
                        multiline: classes.inputTextFieldMultiline
                    }
                }}
            />
        </FormGroup>
    );
};

FormField.defaultProps = {
    InputLabelProps: {
        shrink: true
    }
};

FormField.propTypes = {
    classes: PropTypes.object.isRequired,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
};

export default withStyles(styles)(FormField);
