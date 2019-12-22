import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StatusText from './StatusText';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        textAlign: 'center',
        minWidth: spacing.unit * 25,
        [breakpoints.down('lg')]: {
            minWidth: spacing.unit * 28
        },
        [breakpoints.down('md')]: {
            minWidth: spacing.unit * 22
        },
        [breakpoints.down('sm')]: {
            minWidth: spacing.unit * 16
        }
    },
    versusTypographyRoot: {
        marginTop: spacing.unit * 4,
        [breakpoints.down('sm')]: {
            fontSize: 24
        }
    },
    buttonRoot: {
        [breakpoints.down('sm')]: {
            padding: spacing.unit,
            fontSize: 12
        }
    }
});

const GameStatus = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography
                variant="display2"
                classes={{ root: classes.versusTypographyRoot }}
            >
                VS
            </Typography>
            <StatusText {...pick(props, ['animationToggled', 'resultText'])} />
            {props.resultText && (
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={props.onPlayAgainClick}
                    classes={{ root: classes.buttonRoot }}
                >
                    Play again
                </Button>
            )}
        </div>
    );
};

GameStatus.propTypes = {
    userTool: PropTypes.string,
    animationToggled: PropTypes.bool,
    resultText: PropTypes.string,
    onPlayAgainClick: PropTypes.func.isRequired
};

export default withStyles(styles)(GameStatus);
