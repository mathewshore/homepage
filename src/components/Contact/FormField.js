import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import join from 'lodash/join';

import withStyles from "@material-ui/core/styles/withStyles";
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

import FieldLabel from './FieldLabel';


const styles = ({ spacing, shadows, breakpoints }) => ({
    inputLabelRoot: {
        fontSize: 20,
        marginBottom: spacing.unit * 0.75,
        position: 'relative',
        [breakpoints.up('xl')]: {
            marginBottom: spacing.unit * 1.5
        }
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
        textIndent: spacing.unit * 0.5,
        [breakpoints.up('xl')]: {
            padding: `${spacing.unit * 2}px ${spacing.unit}px`,
            fontSize: 22
        }
    },
    inputTextFieldMultiline: {
        padding: 0
    },
    formHelperTextRoot: {
        opacity: 0,
        height: 0,
        minHeight: 0,
        fontSize: 16,
        transition: 'all 0.5s ease',
        '&.shown': {
            opacity: 1,
            height: spacing.unit * 2
        },
        [breakpoints.up('xl')]: {
            marginTop: spacing.unit * 1.5
        }
    }
});

const FormField = props => {
    const { classes } = props;
    const formHelperTextClassNames = [classes.formHelperTextRoot];
    if (props.helperText) {
        formHelperTextClassNames.push('shown');
    }

    return (
        <FormGroup>
            <TextField
                {...omit(props, [
                    'classes',
                    'label',
                    'isRequired',
                    'helperText'
                ])}
                label={
                    <FieldLabel
                        label={props.label}
                        isRequired={props.isRequired}
                    />
                }
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
            <FormHelperText
                classes={{ root: join(formHelperTextClassNames, ' ') }}
                error={props.error}
            >
                {props.helperText}
            </FormHelperText>
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
    error: PropTypes.bool,
    helperText: PropTypes.string
};

export default withStyles(styles)(FormField);
