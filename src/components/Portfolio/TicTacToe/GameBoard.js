import React from 'react';
import PropTypes from 'prop-types';

import times from 'lodash/times';
import get from 'lodash/get';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';

import withStyles from '@material-ui/core/styles/withStyles';

import GameBoardCell from './GameBoardCell';
import PlayerIcon from './PlayerIcon';
import ResetButton from './ResetButton';


const styles = ({ spacing, shadows }) => ({
    gridWrapper: {
        margin: 'auto'
    },
    boardTable: {
        display: 'table',
        margin: 'auto',
        padding: spacing.unit,
        boxShadow: shadows[1]
    }
});

const GameBoard = props => {
    const { classes, gameIsRunning, grid, winCells } = props;

    return (
        <div className={classes.gridWrapper}>
            <div className={classes.boardTable}>
                {times(props.rowCount, (i) => (
                    <div key={i}>
                        {times(props.rowCellCount, (j) => {
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
                    </div>
                ))}
            </div>
            <ResetButton onClick={props.resetGame} />
        </div>
    );
};

GameBoard.defaultProps = {
    rowCount: 3,
    rowCellCount: 3
};

GameBoard.propTypes = {
    classes: PropTypes.object.isRequired,
    rowCount: PropTypes.number.isRequired,
    rowCellCount: PropTypes.number.isRequired,
    onCellClick: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired 
};

export default withStyles(styles)(GameBoard);