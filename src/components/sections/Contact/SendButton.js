import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

// import CheckIcon from 'material-ui-icons/Check';
// import SaveIcon from 'material-ui-icons/Save';

const styles = ({ palette, spacing }) => ({
    submitButtonRoot: {
        margin: 'auto',
        color: palette.text.light,
        fontSize: 16,
        padding: `${spacing.unit * 1.5}px ${spacing.unit * 3}px`
    },
    submitButtonLabel: {
        paddingTop: 2,
        minWidth: spacing.unit * 25
    },
    circularProgress: {
        position: 'absolute',
    },
});

class SendButton extends React.Component {
    renderSendAnimation = () => {
        const { classes } = this.props;
        return this.props.loading && (
            <CircularProgress
                size={24}
                className={classes.circularProgress}
            />
        );
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <Button
                    variant="raised"
                    color="primary"
                    type="submit"
                    size="large"
                    disabled={this.props.loading}
                    classes={{
                        root: classes.submitButtonRoot,
                        label: classes.submitButtonLabel
                    }}
                >
                    {this.renderSendAnimation()}
                    {this.props.children}
                </Button>
            </div>
        );
    }
}

SendButton.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SendButton);
