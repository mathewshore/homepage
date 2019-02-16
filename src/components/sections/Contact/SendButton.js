import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import green from '@material-ui/core/colors/green';
// import CheckIcon from 'material-ui-icons/Check';
// import SaveIcon from 'material-ui-icons/Save';

const styles = theme => ({
    wrapper: {
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class SendButton extends React.Component {
    state = {
        loading: false,
        success: false,
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {
        if (!this.state.loading) {
            this.setState(
                {
                    success: false,
                    loading: true,
                },
                () => {
                this.timer = setTimeout(() => {
                    this.setState({
                        loading: false,
                        success: true,
                    });
                }, 2000);
                },
                () => {
                this.timer = setTimeout(() => {
                    this.setState({
                        loading: false,
                        success: false,
                    });
                }, 4000);
                },
            );
        }
    };

    timer = undefined;

    render() {
        const { loading, success } = this.state;
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div className={classes.wrapper}>
                <Button
                    variant='raised'
                    color='secondary'
                    className={buttonClassname}
                    disabled={loading}
                    onClick={this.handleButtonClick}
                    type='submit'
                >
                    {success ? 'Message was Sent!' : 'Send Message'}
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        );
    }
}

SendButton.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SendButton);
