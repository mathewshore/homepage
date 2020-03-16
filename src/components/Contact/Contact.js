import React, { useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import pick from 'lodash/pick';
import get from 'lodash/get';
import every from 'lodash/every';
import keys from 'lodash/keys';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Section from '../common/Section';
import GridContainer from '../common/GridContainer';
import { SECTIONS } from '../constants';

import FormField from './FormField';
import SendButton from './SendButton';
import MessageBanner from './MessageBanner';

import {
    getFieldError,
    isRequired,
    isValidEmail,
    validateRequiredFields
} from './helpers';


const styles = ({ palette, spacing }) => ({
    contactSectionContainer: {
        background: palette.background.contact
    },
    submitButtonWrapper: {
        paddingTop: spacing.unit * 2.5,
        textAlign: 'center'
    }
});

const requiredFields = ['name', 'email', 'message'];

const validateEmail = email => {
    if (isRequired(requiredFields, 'email') && !email) {
        return getFieldError('email', email);
    } else if (isValidEmail(email)) {
        return { email: "Invalid email address, expected format: 'example@email.com'." };
    }
    return { email: undefined };
};

const Contact = props => {
    const initialFormValues = {
        name: '',
        email: '',
        message: ''
    };
    const initialMessageBanner = {
        content: null,
        type: null
    };
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [wasSent, setWasSent] = useState(false);
    const [messageBanner, setMessageBanner] = useState(initialMessageBanner);

    const onFieldChange = (key, value) => {
        setFormValues(currentValues => ({
            ...currentValues,
            [key]: value
        }));
    };

    const onFieldBlur = key => e => {
        const { value } = e.target;
        const error = (key === 'email')
            ? validateEmail(value)
            : getFieldError(key, value);

        setFormErrors(currentErrors => ({
            ...currentErrors,
            ...error
        }));
    };

    const getFormErrors = () => {
        const errors = validateRequiredFields(requiredFields, formValues);
        const emailError = validateEmail(get(formValues, 'email'));
        return { ...errors, ...emailError };
    };

    const sendMessage = () => {
        setIsSending(true);

        const data = {
            ...pick(formValues, [
                'name',
                'email',
                'message'
            ])
        };

        $.ajax({
            url: './bin/contact_me.php',
            type: 'POST',
            data,
            cache: false,
            success: () => {
                setIsSending(false);
                setWasSent(true);
                setFormValues(initialFormValues);
                setMessageBanner(initialMessageBanner);
            },
            error: () => {
                setIsSending(false);
                setMessageBanner({
                    type: 'danger',
                    content: 'Message could not be sent, please try again later.'
                });
            },
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errors = getFormErrors();
        setFormErrors(errors);
        const everyFieldPasses = every(keys(errors), key => isEmpty(get(errors, key)));
        if (everyFieldPasses) {
            sendMessage();
        }
    };

    const getFormFieldProps = key => ({
        id: key,
        name: key,
        disabled: isSending,
        isRequired: isRequired(requiredFields, key),
        label: startCase(key),
        value: get(formValues, key),
        onChange: e => onFieldChange(key, e.target.value),
        onBlur: onFieldBlur(key),
        helperText: get(formErrors, key),
        error: !isNil(get(formErrors, key))
    });

    const closeMessageBanner = () => {
        setMessageBanner(initialMessageBanner);
    };

    const { classes } = props;

    return (
        <Section
            id={SECTIONS.CONTACT}
            containerClassName={classes.contactSectionContainer}
        >
            <form onSubmit={handleSubmit}>
                <GridContainer>
                    {messageBanner.content && (
                        <Grid item xs={12}>
                            <MessageBanner
                                type={messageBanner.type}
                                onClose={closeMessageBanner}
                            >
                                {messageBanner.content}
                            </MessageBanner>
                        </Grid>
                    )}
                    <Grid item xs={12} sm={6}>
                        <FormField
                            {...getFormFieldProps('name')}
                            placeholder="Your name..."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormField
                            {...getFormFieldProps('email')}
                            placeholder="Your email..."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormField
                            {...getFormFieldProps('message')}
                            multiline
                            rows={6}
                            placeholder="Type your message here..."
                        />
                    </Grid>
                </GridContainer>
                <div className={classes.submitButtonWrapper}>
                    <SendButton
                        loading={isSending}
                        wasSent={wasSent}
                    />
                </div>
            </form>
        </Section>
    );
};

Contact.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
