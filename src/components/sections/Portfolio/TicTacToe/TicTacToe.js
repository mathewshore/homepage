import React, { Component } from 'react';
import times from 'lodash/times';
import get from 'lodash/get';
import assign from 'lodash/assign';
import includes from 'lodash/includes';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import XIcon from '@material-ui/icons/Close';
import OIcon from '@material-ui/icons/PanoramaFishEye';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

import Table from '../../../common/Table';


const styles = theme => ({
    gridWrapper: {
        margin: 'auto',
    },
    boardTable: {
        margin: 'auto',
        boxShadow: `${grey[300]} 1px 2px 3px`,
    },
    boardTableCell: {
        width: 75,
        height: 75,
        textAlign: 'center',
        border: `1px solid ${grey[500]}`,
        cursor: 'pointer',
        boxShadow: 'none',
        transition: 'all 0.3s',
        '&:hover': {
            boxShadow: `${grey[800]} 1px 1px 5px 1px`,
        },
        '&.disabled': {
            cursor: 'initial',
            boxShadow: 'none',
        },
        '&.win-cell': {
            backgroundColor: green[100],
        },
    },
    resetButton: {
        display: 'block',
        margin: 'auto',
    },
    xIcon: {
        color: red[500],
    },
    oIcon: {
        color: blue[500],
    },
});

class TicTacToe extends Component {
    state = {
        x: { wins: 0 },
        o: { wins: 0 },
        grid: this.getEmptyGrid(),
        turnCount: 1,
        gameIsRunning: true,
        winner: null,
        winCells: null,
    };

    getEmptyGrid() {
        const grid = {};
        times(3, (i) => {
            times(3, (j) => {
                grid[`${i}_${j}`] = null;
            });
        });
        return grid;
    }

    getWinner(grid) {
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
        times(3, (i) => {
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
        const isLastTurn = (this.state.turnCount === 9);

        if (winner || isLastTurn) {
            if (isLastTurn && !winner) {
                this.setState({ gameIsRunning: false });
            } else {
                const player = get(this.state, winner);
                const wins = get(player, 'wins') + 1;
                this.setState({
                    winner,
                    winCells,
                    [winner]: assign({}, player, { wins }),
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

    onCellClick(cellKey) {
        const { grid, turnCount } = this.state;
        const playerKey = (turnCount % 2 === 0) ? 'o' : 'x';
        grid[cellKey] = playerKey;
        this.setState({ grid });

        if (turnCount >= 5) {
            this.checkForWin(grid);
        } else {
            this.incrementTurnCount();
        }
    }

    renderTTTGrid() {
        const { classes } = this.props;
        const { winCells, grid, gameIsRunning } = this.state;

        return (
            <div className={classes.gridWrapper}>
                <table className={classes.boardTable}>
                    <tbody>
                        {times(3, (i) => (
                            <tr key={i}>
                                {times(3, (j) => {
                                    const cellKey = `${i}_${j}`;
                                    const playerKey = get(grid, cellKey);

                                    const isWinCell = includes(winCells, cellKey);
                                    const isDisabled = playerKey || !gameIsRunning;
                                    const cellClassName = `${isWinCell ? ' win-cell' : ''} ${isDisabled ? ' disabled' : ''}`;

                                    return (
                                        <td
                                            key={cellKey}
                                            className={classes.boardTableCell + cellClassName}
                                            onClick={() => (!playerKey && gameIsRunning) && this.onCellClick(cellKey)}
                                        >
                                            {playerKey && this.getPlayerIcon(playerKey)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Button
                    classes={{ root: classes.resetButton }}
                    color="primary"
                    onClick={this.resetGame}
                >
                    Reset board
                </Button>
            </div>
        );
    }

    resetGame = () => {
        this.setState({
            grid: this.getEmptyGrid(),
            turnCount: 1,
            gameIsRunning: true,
            winner: null,
            winCells: null,
        });
    }

    getPlayerIcon(playerKey) {
        const { classes } = this.props;
        const Icon = playerKey === 'x' ? XIcon : OIcon;
        const iconClassName = playerKey === 'x' ? classes.xIcon : classes.oIcon;
        return <Icon classes={{ root: iconClassName }} />;
    }

    getStatusText() {
        if (this.state.winner) {
            return 'won!';
        } else if (this.state.gameIsRunning) {
            return 'turn';
        }
        return 'Draw!';
    }

    renderGameStatusText() {
        const { winner, turnCount, gameIsRunning } = this.state;
        const playerKey = winner || ((turnCount % 2 === 0) ? 'o' : 'x');
        
        return (
            <div style={{ textAlign: 'center' }}>
                {(gameIsRunning || winner) && this.getPlayerIcon(playerKey)}
                {this.getStatusText()}
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        const dataMapping = [
            { dataKey: 'player', label: 'Player' },
            { dataKey: 'wins', label: 'Wins' }
        ];

        const data = [
            {
                player: this.getPlayerIcon('x'),
                wins: this.state.x.wins
            },
            {
                player: this.getPlayerIcon('o'),
                wins: this.state.o.wins
            }
        ];

        return (
            <Grid container>
                <Grid item md={4} xs={12}>
                    <Table dataMapping={dataMapping} data={data} />
                </Grid>
                <Grid item md={8} xs={12}>
                    {this.renderGameStatusText()}
                    {this.renderTTTGrid()}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(TicTacToe);
