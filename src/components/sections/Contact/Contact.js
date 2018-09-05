import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid, FormGroup, TextField, FormLabel, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import Section from '../Section';
// import SendButton from './SendButton';


const styles = theme => ({
    textFieldRoot: {
        padding: 0,
    },
    textFieldInput: {
        borderRadius: 2,
        boxShadow: `inset ${grey[400]} 0px 1px 3px 1px`,
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
            errors.email = "Email address seems invalid, please make sure the format 'example@email.com'.";
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
        console.log('derp')
        e.preventDefault();
        const formIsValid = this.checkFormValidity();
        if (formIsValid) {
            // do shit here.
        }
    }

    render() {
        const { sectionBackgroundColor, classes } = this.props;
        const { name, email, message, errors } = this.state;

        const fieldProps = {
            fullWidth: true,
            InputProps: {
                classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                    // underline: classes.textFieldUnderline,
                },
            },
        };

        return (
            <Section id='contact' background={sectionBackgroundColor}>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormLabel className={classes.fieldLabel}>Name</FormLabel>
                                <TextField
                                    {...fieldProps}
                                    id='name'
                                    placeholder='Your name...'
                                    value={name}
                                    onChange={this.handleChange('name')}
                                    helperText={errors.name}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormLabel className={classes.fieldLabel}>Email</FormLabel>
                                <TextField
                                    {...fieldProps}
                                    id='email'
                                    placeholder='Your email...'
                                    value={email}
                                    onChange={this.handleChange('email')}
                                    helperText={errors.email}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormLabel className={classes.fieldLabel}>Message</FormLabel>
                                <TextField
                                    {...fieldProps}
                                    id='message'
                                    placeholder='Type your message here...'
                                    value={message}
                                    onChange={this.handleChange('message')}
                                    multiline={true}
                                    rows={6}
                                    helperText={errors.message}
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <div className={classes.submitButtonWrapper}>
                        <Button
                            className={classes.submitButton}
                            variant='raised'
                            color='primary'
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
    classes: PropTypes.object,
    sectionBackgroundColor: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Contact);
