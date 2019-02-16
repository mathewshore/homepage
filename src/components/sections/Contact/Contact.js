import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

import Section from '../Section';
// import SendButton from './SendButton';
import { SECTIONS } from '../../constants';


const styles = theme => ({
    contactSectionContainer: {
        background: theme.palette.background.sections.contact
    },
    textFieldRoot: {
        padding: 0,
        '&:before': {
            borderBottom: 0,
        },
    },
    textFieldInput: {
        borderRadius: 2,
        boxShadow: `0px 1px 3px 1px ${grey[400]}`,
        fontSize: 18,
        padding: '8px 4px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    textFieldUnderline: {
        // backgroundColor: 'green',
        height: 0,
    },
    fieldLabel: {
        fontSize: 20,
        marginBottom: 8,
    },
    submitButtonWrapper: {
        paddingTop: 20,
        textAlign: 'center',
        // position: 'relative',
    },
    submitButton: {
        margin: 'auto',
    },
});

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {
                name: '',
                email: '',
                message: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key) {
        return (e) => {
            this.setState({ [key]: e.target.value });
        };
    }

    checkFormValidity() {
        const { name, email, message } = this.state;
        const errors = {};

        if (!name) {
            errors.name = 'Please, insert your name.';
        }
        if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = "Email address format is invalid, valid format is 'example@email.com'.";
        }
        if (!message) {
            errors.message = 'Please, type a message.';
        }

        if (!errors) {
            return true;
        }
        this.setState({ errors });
        return false;
    }

    handleSubmit(e) {
        // ToDo: finish contact form message sending logic.
        e.preventDefault();
        const formIsValid = this.checkFormValidity();
        if (formIsValid) {
            // do shit here.
        }
    }

    render() {
        const { classes } = this.props;

        const getTextFieldProps = (fieldKey) => ({
            id: fieldKey,
            value: get(this.state, fieldKey),
            onChange: this.handleChange(fieldKey),
            fullWidth: true,
            helperText: get(this.state.errors, fieldKey),
            InputProps: {
                classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                    // underline: classes.textFieldUnderline,
                },
            },
        });

        // ToDo: render 'required' text next to required field labels.
        // ToDo: change helper text color to red.

        return (
            <Section id={SECTIONS.CONTACT} containerClassName={classes.contactSectionContainer}>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormLabel className={classes.fieldLabel}>Name</FormLabel>
                                <TextField
                                    {...getTextFieldProps('name')}
                                    placeholder='Your name...'
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormLabel className={classes.fieldLabel}>Email</FormLabel>
                                <TextField
                                    {...getTextFieldProps('email')}
                                    placeholder='Your email...'
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormLabel className={classes.fieldLabel}>Message</FormLabel>
                                <TextField
                                    {...getTextFieldProps('message')}
                                    multiline
                                    rows={6}
                                    placeholder='Type your message here...'
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <div className={classes.submitButtonWrapper}>
                        <Button
                            className={classes.submitButton}
                            variant='raised'
                            color='secondary'
                            type='submit'
                            size='large'
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
