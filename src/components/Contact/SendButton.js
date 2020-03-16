import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import SendButtonContent from './SendButtonContent';


const styles = ({ palette, spacing, breakpoints }) => ({
    submitButtonRoot: {
        margin: 'auto',
        color: palette.text.light,
        fontSize: 16,
        padding: `${spacing.unit * 1.5}px ${spacing.unit * 3}px`,
        marginTop: spacing.unit,
        minWidth: spacing.unit * 28,
        [breakpoints.down('xs')]: {
            width: '100%'
        },
        [breakpoints.up('xl')]: {
            minWidth: spacing.unit * 40,
            padding: `${spacing.unit * 2.5}px ${spacing.unit * 3}px`,
        }
    },
    submitButtonLabel: {
        paddingTop: 2,
        [breakpoints.up('xl')]: {
            fontSize: 24
        }
    },
    circularProgress: {
        position: 'absolute',
    },
});

const SendButton = props => {
    const { classes } = props;

    return (
        <div className={classes.wrapper}>
            <Button
                variant="raised"
                color="primary"
                type="submit"
                size="large"
                disabled={props.loading}
                classes={{
                    root: classes.submitButtonRoot,
                    label: classes.submitButtonLabel
                }}
            >
                {props.loading && (
                    <CircularProgress
                        size={24}
                        className={classes.circularProgress}
                    />
                )}
                <SendButtonContent {...pick(props, ['loading', 'wasSent'])} />
            </Button>
        </div>
    );
};

SendButton.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SendButton);
