import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import GameOver from './GameOver';
import Score from './Score';
import { GRID_WIDTH } from './constants';


const styles = ({
    endScreenContainer: {
        background: 'rgba(236, 236, 236, 0.8)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: `calc((${GRID_WIDTH * 2.5}vh) + ${GRID_WIDTH * 2}px)`,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameStatus: {
        textAlign: 'center'
    },
    startButtonRoot: {
        color: 'white'
    }
});

const EndScreen = props => {
    const { classes, gameOver } = props;

    return (
        <div className={classes.endScreenContainer}>
            <div className={classes.gameStatus}>
                {gameOver && (
                    <Fragment>
                        <GameOver />
                        <Score score={props.score} />
                    </Fragment>
                )}
                <Button
                    onClick={props.onStartClick}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.startButtonRoot }}
                >
                    {gameOver ? 'Play again' : 'Start'}
                </Button>
            </div>
        </div>
    );
};

EndScreen.propTypes = {
    classes: PropTypes.object.isRequired,
    onStartClick: PropTypes.func,
    gameOver: PropTypes.bool,
    score: PropTypes.number
};

export default withStyles(styles)(EndScreen);
