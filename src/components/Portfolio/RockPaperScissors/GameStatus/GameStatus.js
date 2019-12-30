import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import join from 'lodash/join';

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
            minWidth: spacing.unit * 12
        }
    },
    versusTypographyRoot: {
        marginTop: spacing.unit * 7,
        transition: 'all 1s ease',
        '&.result-position': {
            marginTop: spacing.unit * 2
        },
        [breakpoints.down('sm')]: {
            fontSize: 24,
            marginTop: spacing.unit * 10.5,
            '&.result-position': {
                marginTop: spacing.unit * 5
            }
        },
        [breakpoints.up('xl')]: {
            marginTop: spacing.unit * 12
        }
    },
    statusText: {
        opacity: 0,
        transition: 'all 0.3s ease',
        '&.visible': {
            opacity: 1
        }
    },
    buttonRoot: {
        opacity: 0,
        transition: 'all 0.3s ease',
        '&.visible': {
            opacity: 1
        },
        [breakpoints.down('sm')]: {
            padding: spacing.unit,
            fontSize: 12
        }
    }
});

const GameStatus = props => {
    const { classes } = props;
    const versusTypographyClassNames = [classes.versusTypographyRoot];
    if (props.animationToggled || props.resultText) {
        versusTypographyClassNames.push('result-position');
    }

    const statusTextClassNames = [classes.statusText];
    const buttonClassNames = [classes.buttonRoot];
    if (props.resultText) {
        statusTextClassNames.push('visible');
        buttonClassNames.push('visible');
    }

    return (
        <div className={classes.container}>
            <Typography
                variant="display2"
                classes={{ root: join(versusTypographyClassNames, ' ') }}
            >
                VS
            </Typography>
            <StatusText
                {...pick(props, ['animationToggled', 'resultText'])}
                className={join(statusTextClassNames, ' ')}
            />
            <Button
                color="primary"
                variant="outlined"
                onClick={props.onPlayAgainClick}
                classes={{ root: join(buttonClassNames, ' ') }}
            >
                Play again
            </Button>
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
