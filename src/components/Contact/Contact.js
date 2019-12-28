import React, { Component, Fragment } from 'react';
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
import CheckIcon from '@material-ui/icons/CheckCircle';

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
        paddingTop: 20,
        textAlign: 'center',
    },
    checkIcon: {
        marginLeft: spacing.unit,
        marginTop: -spacing.unit * 0.25
    }
});

const requiredFields = ['name', 'email', 'message'];

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        errors: {},
        isSending: false,
        wasSent: false,
        messageBanner: null,
        messageBannerType: null
    };

    onFieldChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    onFieldBlur = key => () => {
        this.validateValue(key);
    };

    validateValue = key => {
        const value = get(this.state, key);
        const error = (key === 'email')
            ? this.validateEmail()
            : getFieldError(key, value);

        this.setState({
            errors: {
                ...this.state.errors,
                ...error
            }
        });
    };

    validateEmail = () => {
        const { email } = this.state;
        if (isRequired(requiredFields, 'email') && !email) {
            return getFieldError('email', email);
        } else if (isValidEmail(email)) {
            return { email: "Invalid email address, expected format: 'example@email.com'." };
        }
        return { email: undefined };
    };

    getFormErrors = () => {
        const errors = validateRequiredFields(requiredFields, this.state);
        const emailError = this.validateEmail();
        return { ...errors, ...emailError };
    };

    sendMessage = () => {
        this.setState({ isSending: true });

        const data = {
            ...pick(this.state, [
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
                this.setState({
                    isSending: false,
                    wasSent: true,
                    name: '',
                    email: '',
                    message: ''
                });
            },
            error: () => {
                this.setState({
                    isSending: false,
                    messageBannerType: 'danger',
                    messageBanner: 'Message could not be sent, please try again later.'
                });
            },
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.getFormErrors();
        this.setState({ errors });
        const everyFieldPasses = every(keys(errors), key => isEmpty(get(errors, key)));
        if (everyFieldPasses) {
            this.sendMessage();
        }
    };

    getFormFieldProps = key => ({
        id: key,
        name: key,
        disabled: this.state.isSending,
        isRequired: isRequired(key),
        label: startCase(key),
        value: get(this.state, key),
        onChange: this.onFieldChange(key),
        onBlur: this.onFieldBlur(key),
        helperText: get(this.state.errors, key),
        error: !isNil(get(this.state.errors, key))
    });

    renderSendButtonText = () => {
        if (this.state.isSending) {
            return 'Sending Message';
        }
        if (this.state.wasSent) {
            const { classes } = this.props;
            return (
                <Fragment>
                    Message was sent
                    <CheckIcon className={classes.checkIcon} />
                </Fragment>
            );
        }
        return 'Send Message';
    };

    closeMessageBanner = () => {
        this.setState({
            messageBanner: null,
            messageBannerType: null
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Section
                id={SECTIONS.CONTACT}
                containerClassName={classes.contactSectionContainer}
            >
                <form onSubmit={this.handleSubmit}>
                    <GridContainer>
                        {this.state.messageBanner && (
                            <Grid item xs={12}>
                                <MessageBanner
                                    type={this.state.messageBannerType}
                                    onClose={this.closeMessageBanner}
                                >
                                    {this.state.messageBanner}
                                </MessageBanner>
                            </Grid>
                        )}
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
                    </GridContainer>
                    <div className={classes.submitButtonWrapper}>
                        <SendButton loading={this.state.isSending}>
                            {this.renderSendButtonText()}
                        </SendButton>
                    </div>
                </form>
            </Section>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Contact);
