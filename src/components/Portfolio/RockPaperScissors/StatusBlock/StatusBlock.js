import React from 'react';
import PropTypes from 'prop-types';

import pick from 'lodash/pick';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StatusText from './StatusText';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        // todo: define minwidth for media screens
        minWidth: spacing.unit * 25,
        textAlign: 'center'
    },
    versusTextRoot: {
        marginTop: spacing.unit * 4
    }
});

const StatusBlock = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography
                variant="display2"
                classes={{ root: classes.versusTextRoot }}
            >
                VS
            </Typography>
            <StatusText {...pick(props, ['animationToggled', 'resultText'])} />
            {props.resultText && (
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={props.onPlayAgainClick}
                >
                    Play again
                </Button>
            )}
        </div>
    );
};

StatusBlock.propTypes = {
    userTool: PropTypes.string,
    animationToggled: PropTypes.bool,
    resultText: PropTypes.string,
    onPlayAgainClick: PropTypes.func.isRequired
};

export default withStyles(styles)(StatusBlock);
