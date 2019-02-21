import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import reduce from 'lodash/reduce';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Section from '../Section';
import FormField from './FormField';
// import SendButton from './SendButton';
import { SECTIONS } from '../../constants';


const styles = theme => ({
    contactSectionContainer: {
        background: theme.palette.background.sections.contact
    },
    submitButtonWrapper: {
        paddingTop: 20,
        textAlign: 'center',
    },
    submitButton: {
        margin: 'auto',
        color: theme.palette.text.light
    },
    // ToDo: move this styling to <FormField />
    fieldLabelWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    labelRequiredText: {
        fontSize: 14,
        marginLeft: theme.spacing.unit
    }
});

const requiredFields = ['name', 'email', 'message'];

const validateRequiredFields = (requiredFields, values) => reduce(
    requiredFields, (errors, key) => ({
        ...errors,
        ...getFieldError(key, get(values, key))
    }), {}
);

const getFieldError = (key, value) => ({
    [key]: value ? undefined : `Please, insert ${key}.`
});

const isRequired = key => includes(requiredFields, key);

const getRequiredText = key => isRequired(key) && '(required)';

const isValidEmail = email => email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        errors: {},
    };

    onFieldChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    onFieldBlur = key => () => {
        this.validateValue(key);
    };

    validateValue = key => {
        const value = get(this.state, key);
        const isEmailWithValue = key === 'email';
        const error = isEmailWithValue ? this.validateEmail() : getFieldError(key, value);
        this.setState({ errors: { ...this.state.errors, ...error } });
    };

    validateEmail = () => {
        const { email } = this.state;
        if (isRequired('email') && !email) {
            return getFieldError('email', email)
        } else if (isValidEmail(email)) {
            return { email: "Invalid email address, expected format: 'example@email.com'." };
        }
        return { email: undefined };
    };

    getFormErrors() {
        const errors = validateRequiredFields(requiredFields, this.state);
        return { ...errors, ...this.validateEmail() };
    }

    handleSubmit = e => {
        // ToDo: finish contact form message sending logic.
        e.preventDefault();
        const errors = this.getFormErrors();
        this.setState({ errors });
        if (isEmpty(errors)) {
            console.log('Send form.')
        }
    };

    getLabel = key => {
        const { classes } = this.props;
        const requiredText = getRequiredText(key);
        return (
            <div className={classes.fieldLabelWrapper}>
                {startCase(key)}
                {requiredText && (
                    <div className={classes.labelRequiredText}>
                        {requiredText}
                    </div>
                )}
            </div>
        );
    };

    getFormFieldProps = key => ({
        id: key,
        name: key,
        label: this.getLabel(key),
        value: get(this.state, key),
        onChange: this.onFieldChange(key),
        onBlur: this.onFieldBlur(key),
        // Return default ' ' to prevent elements from jumping.
        helperText: get(this.state.errors, key, ' '),
        error: !isNil(get(this.state.errors, key))
    });

    render() {
        const { classes } = this.props;

        return (
            <Section
                id={SECTIONS.CONTACT}
                containerClassName={classes.contactSectionContainer}
            >
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormField
                                {...this.getFormFieldProps('name')}
                                placeholder="Your name..."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormField
                                {...this.getFormFieldProps('email')}
                                placeholder="Your email..."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormField
                                {...this.getFormFieldProps('message')}
                                multiline
                                rows={6}
                                placeholder="Type your message here..."
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.submitButtonWrapper}>
                        <Button
                            className={classes.submitButton}
                            variant="raised"
                            color="primary"
                            type="submit"
                            size="large"
                        >
                            Send Message
                        </Button>
                    </div>
                    {/* <SendButton /> */}
                </form>
            </Section>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Contact);
