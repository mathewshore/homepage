import React, { Component } from 'react';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow, TableCell, Grid, Button } from '@material-ui/core';
import { Close as XIcon, PanoramaFishEye as OIcon } from '@material-ui/icons';
import { blue, red, green, grey } from '@material-ui/core/colors';


const styles = theme => ({
    gridWrapper: {
        margin: 'auto',
        // width: 500,
        // height: 500,
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
    statsTableCell: {
        textAlign: 'center',
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
    constructor() {
        super();

        this.state = {
            x: { wins: 0 },
            o: { wins: 0 },
            grid: this.getEmptyGrid(),
            turnCount: 1,
            gameIsRunning: true,
            winner: null,
            winCells: null,
        };

        this.resetGame = this.resetGame.bind(this);
    }

    getEmptyGrid() {
        const grid = {};
        _.times(3, (i) => {
            _.times(3, (j) => {
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
        _.times(3, (i) => {
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
                const player = _.get(this.state, winner);
                const wins = _.get(player, 'wins') + 1;
                this.setState({
                    winner,
                    winCells,
                    [winner]: _.assign({}, player, { wins }),
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
                        {_.times(3, (i) => (
                            <tr key={i}>
                                {_.times(3, (j) => {
                                    const cellKey = `${i}_${j}`;
                                    const playerKey = _.get(grid, cellKey);

                                    const isWinCell = _.includes(winCells, cellKey);
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

    resetGame() {
        this.setState({
            grid: this.getEmptyGrid(),
            turnCount: 1,
            gameIsRunning: true,
            winner: null,
            winCells: null,
        });
    }

    getPlayerIcon(playerKey) {
        const { xIcon, oIcon } = this.props.classes;
        return playerKey === 'x' ? <XIcon classes={{ root: xIcon }} /> : <OIcon classes={{ root: oIcon }} />;
    }

    getStatusText() {
        const { winner, gameIsRunning } = this.state;
        if (winner) {
            return winner ? 'won!' : 'turn';
        } else if (gameIsRunning) {
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
        const { x, o } = this.state;

        return (
            <Grid container>
                <Grid item md={4} xs={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell classes={{ root: classes.statsTableCell }}>
                                    Player
                                </TableCell>
                                <TableCell classes={{ root: classes.statsTableCell }}>
                                    Wins
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell classes={{ root: classes.statsTableCell }}>
                                    {this.getPlayerIcon('x')}
                                </TableCell>
                                <TableCell classes={{ root: classes.statsTableCell }}>
                                    {x.wins}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{ root: classes.statsTableCell }}>
                                    {this.getPlayerIcon('o')}
                                </TableCell>
                                <TableCell classes={{ root: classes.statsTableCell }}>
                                    {o.wins}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
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
