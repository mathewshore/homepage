import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import withStyles from "@material-ui/core/styles/withStyles";
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';


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
    const { classes } = props;
    return (
        <FormGroup>
            <TextField
                {...omit(props, ['classes', 'theme'])}
                InputLabelProps={{
                    ...props.InputLabelProps,
                    shrink: true,
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

FormField.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    id: PropTypes.string,
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(FormField);
