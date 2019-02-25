import React from 'react';
import PropTypes from 'prop-types';
import size from 'lodash/size';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    statusBlockContainer: {
        textAlign: 'center'
    },
    versusTextRoot: {
        marginTop: theme.spacing.unit * 3
    }
});

const renderStatusText = (animationToggled, resultText) => {
    if (animationToggled || !resultText) {
        return <p>{animationToggled ? 'Opponent is choosing' : 'Choose your tool'}</p>;
    }
    const textStrings = resultText.split(' ');
    const result = textStrings.splice((size(textStrings) - 1), 1);
    return (
        <p>{join(textStrings, ' ')} <b>{result}</b></p>
    );
}

const StatusBlock = props => {
    const { classes } = props;

    return (
        <div className={classes.statusBlockContainer}>
            <Typography
                variant="display2"
                classes={{ root: classes.versusTextRoot }}
            >
                VS
            </Typography>
            {renderStatusText(props.animationToggled, props.resultText)}
            {props.resultText && (
                <div>
                    <Button
                        color="primary"
                        onClick={props.onPlayAgainClick}
                        variant="outlined"
                    >
                        Play again
                    </Button>
                </div>
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
