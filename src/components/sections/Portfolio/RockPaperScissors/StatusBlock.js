import React from 'react';
import PropTypes from 'prop-types';
import size from 'lodash/size';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing }) => ({
    statusBlockContainer: {
        textAlign: 'center'
    },
    versusTextRoot: {
        marginTop: spacing.unit * 4
    },
    statusTypographyRoot: {
        margin: `${spacing.unit * 2}px 0`
    }
});

const renderStatusText = (animationToggled, resultText, classes) => {
    const typographyProps = {
        classes: {
            root: classes.statusTypographyRoot
        }
    };

    if (!resultText) {
        return (
            <Typography {...typographyProps}>
                {animationToggled ? 'Opponent is choosing' : 'Choose your tool'}
            </Typography>
        );
    }

    const textStrings = resultText.split(' ');
    const result = textStrings.splice((size(textStrings) - 1), 1);
    return (
        <Typography {...typographyProps}>
            {join(textStrings, ' ')} <b>{result}</b>
        </Typography>
    );
};

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
            {renderStatusText(props.animationToggled, props.resultText, classes)}
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
