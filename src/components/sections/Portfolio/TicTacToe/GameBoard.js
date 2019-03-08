import React from 'react';
import PropTypes from 'prop-types';

import times from 'lodash/times';
import get from 'lodash/get';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

import GameBoardCell from './GameBoardCell';
import PlayerIcon from './PlayerIcon';


const styles = theme => ({
    gridWrapper: {
        margin: 'auto',
    },
    boardTable: {
        margin: 'auto',
        boxShadow: `${grey[300]} 1px 2px 3px`,
    },
    resetButton: {
        display: 'block',
        margin: 'auto',
    }
});

const GameBoard = props => {
    const { classes, gameIsRunning, grid, winCells } = props;

    return (
        <div className={classes.gridWrapper}>
            <table className={classes.boardTable}>
                <tbody>
                    {times(3, (i) => (
                        <tr key={i}>
                            {times(3, (j) => {
                                const cellKey = `${i}_${j}`;
                                const playerKey = get(grid, cellKey);

                                return (
                                    <GameBoardCell
                                        key={cellKey}
                                        isWinCell={includes(winCells, cellKey)}
                                        disabled={!isNil(playerKey) || !gameIsRunning}
                                        onClick={props.onCellClick(cellKey)}
                                    >
                                        {playerKey && <PlayerIcon iconType={playerKey} />}
                                    </GameBoardCell>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button
                classes={{ root: classes.resetButton }}
                color="primary"
                onClick={props.resetGame}
            >
                Reset board
            </Button>
        </div>
    );
};

GameBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameBoard);