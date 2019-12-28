import React, { Component } from 'react';
import PropTypes from 'prop-types';

import times from 'lodash/times';
import get from 'lodash/get';
import assign from 'lodash/assign';
import pick from 'lodash/pick';
import reduce from 'lodash/reduce';
import concat from 'lodash/concat';

import withStyles from '@material-ui/core/styles/withStyles';

// import Table from '../../../common/Table';
import Description from './Description';
import GameBoard from './GameBoard';
import PlayerIcon from './PlayerIcon';
import StatusText from './StatusText';


const styles = ({ breakpoints, spacing }) => ({
    container: {
        // display: 'flex'
        [breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    gameContainer: {
        marginLeft: 'auto'
    },
    statTableContainer: {
        width: spacing.unit * 50,
        [breakpoints.up('md')]: {
            marginRight: spacing.unit * 5,
        },
        [breakpoints.down('sm')]: {
            margin: 'auto'
        }
    },
    statusIcon: {
        marginLeft: spacing.unit * -0.5,
        marginRight: spacing.unit * 0.5,
    }
});

// Keep these constants in here incase
// these are moved to state for dynamic grid.
const GAME_BOARD_CELL_COUNT = 9;
const ROW_COUNT = 3;
const ROW_CELL_COUNT = GAME_BOARD_CELL_COUNT / ROW_COUNT;
const POSSIBLE_WIN_ROUND_NUMBER = (ROW_CELL_COUNT * 2) - 1;

// const dataMapping = [
//     { dataKey: 'player', label: 'Player' },
//     { dataKey: 'wins', label: 'Wins' }
// ];

const getGridKeys = rowCellCount =>
    concat(...times(rowCellCount, (i) =>
        times(rowCellCount, (j) => `${i}_${j}`)
));

const getEmptyGrid = () =>
    reduce(getGridKeys(ROW_CELL_COUNT), (grid, key) => ({
        ...grid,
        [key]: null
    }), {});

class TicTacToe extends Component {
    state = {
        x: { wins: 0 },
        o: { wins: 0 },
        grid: getEmptyGrid(),
        turnCount: 1,
        gameIsRunning: true,
        winner: null,
        winCells: null,
    };

    getWinner(grid) {
        // ToDo: Horrible logic, improve it ;<
        if ( // Check if grid has a cross win.
            ((grid['0_0'] === grid['1_1'] && grid['1_1'] === grid['2_2']) ||
            (grid['0_2'] === grid['1_1'] && grid['1_1'] === grid['2_0']))
            && grid['1_1']
        ) {
            return {
                winner: grid['1_1'],
                winCells: (grid['0_0'] === grid['2_2'] && grid['0_0'])
                    ? ['0_0', '1_1', '2_2'] // From top-right to bottom-left.
                    : ['0_2', '1_1', '2_0'] // From top-left to bottom-right.
            };
        }

        let winner = null;
        let winCells = null;
        times(ROW_CELL_COUNT, (i) => {
            if (!winner) {
                if ( // Check if grid row has same cell values.
                    (grid[`${i}_0`] === grid[`${i}_1`]) &&
                    (grid[`${i}_2`] === grid[`${i}_1`]) &&
                    grid[`${i}_0`]
                ) {
                    winner = grid[`${i}_0`];
                    winCells = [`${i}_0`, `${i}_1`, `${i}_2`];
                } else if ( // Check if grid column has same cell values.
                    (grid[`0_${i}`] === grid[`1_${i}`]) &&
                    (grid[`1_${i}`] === grid[`2_${i}`]) &&
                    grid[`0_${i}`]
                ) {
                    winner = grid[`0_${i}`];
                    winCells = [`0_${i}`, `1_${i}`, `2_${i}`];
                }
            }
        });
        return { winner, winCells };
    }

    checkForWin(grid) {
        const { winner, winCells } = this.getWinner(grid);
        const isLastTurn = (this.state.turnCount === GAME_BOARD_CELL_COUNT);

        if (winner || isLastTurn) {
            if (isLastTurn && !winner) {
                this.setState({ gameIsRunning: false });
            } else {
                const player = get(this.state, winner);
                const wins = get(player, 'wins') + 1;
                this.setState({
                    winner,
                    winCells,
                    [winner]: { ...player, wins },
                    gameIsRunning: false,
                });
            }
        } else {
            this.incrementTurnCount();
        }
    }

    incrementTurnCount() {
        this.setState({ turnCount: this.state.turnCount + 1 });
    }

    getUpdatedGrid = (cellKey, iconType) =>
        assign({}, this.state.grid, { [cellKey]: iconType });

    onCellClick = (cellKey) => () => {
        // Wait for the click animation to finish before the cell is disabled.
        setTimeout(() => {
            // Prevent additional clicks from being registered.
            if (this.state.grid[cellKey]) {
                return;
            }
            const { turnCount } = this.state;
            const iconType = (turnCount % 2 === 0) ? 'o' : 'x';
            const grid = this.getUpdatedGrid(cellKey, iconType);
            this.setState({ grid });

            if (turnCount >= (POSSIBLE_WIN_ROUND_NUMBER)) {
                this.checkForWin(grid);
            } else {
                this.incrementTurnCount();
            }
        }, 200);
    };

    resetGame = () => {
        this.setState({
            grid: getEmptyGrid(),
            turnCount: 1,
            gameIsRunning: true,
            winner: null,
            winCells: null
        });
    };

    getStatusText = () => {
        if (this.state.winner) {
            return 'won!';
        } else if (this.state.gameIsRunning) {
            return 'turn';
        }
        return 'Draw!';
    };

    getPlayerData = playerKey => ({
        player: <PlayerIcon iconType={playerKey} />,
        wins: get(this.state, `${playerKey}.wins`)
    });

    getStatTableData = () => [
        this.getPlayerData('x'),
        this.getPlayerData('o')
    ];
    
    render() {
        // ToDo: Store game data to localStorage.
        const { classes } = this.props;
        const { winner } = this.state;
        const iconType = winner || ((this.state.turnCount % 2 === 0) ? 'o' : 'x');
        const withIcon = this.state.gameIsRunning || winner;

        return (
            <div className={classes.container}>
                <Description />
                <div className={classes.gameContainer}>
                    <StatusText>
                        {withIcon && (
                            <PlayerIcon
                                iconType={iconType}
                                className={classes.statusIcon}
                            />
                        )}
                        {this.getStatusText()}
                    </StatusText>
                    <GameBoard
                        {...pick(this.state, [
                            'winCells',
                            'grid',
                            'gameIsRunning'
                        ])}
                        rowCount={ROW_COUNT}
                        rowCellCount={ROW_CELL_COUNT}
                        onCellClick={this.onCellClick}
                        resetGame={this.resetGame}
                    />
                </div>
            </div>
        );
    }
}

TicTacToe.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TicTacToe);
