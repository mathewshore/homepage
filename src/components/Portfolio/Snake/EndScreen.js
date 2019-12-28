import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import GameOver from './GameOver';
import Score from './Score';
import { GRID_WIDTH, CELL_SIZE, CELL_SIZE_MIN } from './constants';


const endScreenSize = (factor, unit) =>
    `calc((${GRID_WIDTH * factor}${unit}) + ${GRID_WIDTH * 2}px)`;

const styles = ({ breakpoints }) => ({
    endScreenContainer: {
        background: 'rgba(236, 236, 236, 0.8)',
        position: 'absolute',
        width: endScreenSize(CELL_SIZE.XS.VALUE, CELL_SIZE.XS.UNIT),
        height: endScreenSize(CELL_SIZE.XS.VALUE, CELL_SIZE.XS.UNIT),
        minHeight: endScreenSize(CELL_SIZE_MIN.VALUE, CELL_SIZE_MIN.UNIT),
        minWidth: endScreenSize(CELL_SIZE_MIN.VALUE, CELL_SIZE_MIN.UNIT),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [breakpoints.up('md')]: {
            width: endScreenSize(CELL_SIZE.MD.VALUE, CELL_SIZE.MD.UNIT),
            height: endScreenSize(CELL_SIZE.MD.VALUE, CELL_SIZE.MD.UNIT)
        },
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
