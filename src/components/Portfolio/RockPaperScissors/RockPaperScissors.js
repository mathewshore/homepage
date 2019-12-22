import React, { Component } from 'react';
import PropTypes from 'prop-types';

import random from 'lodash/random';
import find from 'lodash/find';
import get from 'lodash/get';
import assign from 'lodash/assign';

import withStyles from '@material-ui/core/styles/withStyles';

import User from './User';
import GameStatus from './GameStatus';
import Opponent from './Opponent';
import tools from './tools';
import Description from './Description';

import { RESULT_TYPES } from './constants';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        display: 'flex',
        [breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    rpsGameContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: `${spacing.unit * 5}px auto`
    }
});

const nullifiedGameState = {
    userTool: null,
    opponentTool: null,
    updatedStat: null,
    resultText: null
};

const getRandomTool = () => get(tools[random(0, 2)], 'value');

class RockPaperScissors extends Component {
    state = {
        ...nullifiedGameState,
        animationToggled: false,
        stats: {
            [RESULT_TYPES.WIN]: 0,
            [RESULT_TYPES.LOOSE]: 0,
            [RESULT_TYPES.DRAW]: 0
        }
    };

    gameStateTimeoutFunction = null;

    componentWillUnmount() {
        if (this.gameStateTimeoutFunction) {
            // Stop animation and state update if
            // modal is closed before round is finished.
            clearTimeout(this.gameStateTimeoutFunction);
        }
    }

    getResult(userTool, opponentTool) {
        if (userTool === opponentTool) {
            return RESULT_TYPES.DRAW;
        }
        const tool = find(tools, { value: userTool });
        return (tool.beats === opponentTool)
            ? RESULT_TYPES.WIN
            : RESULT_TYPES.LOOSE;
    }

    getResultText(result) {
        if (result === RESULT_TYPES.DRAW) {
            return 'Draw';
        }
        return result === RESULT_TYPES.WIN
            ? 'You won!'
            : 'You lost';
    }

    getUpdateStats = result => {
        const { stats } = this.state;
        const newStat = get(stats, result) + 1;
        return assign({}, stats, { [result]: newStat });
    };

    onToolClick = userTool => () => {
        this.setState({ userTool, animationToggled: true });

        this.gameStateTimeoutFunction = setTimeout(() => {
            const opponentTool = getRandomTool();
            const result = this.getResult(userTool, opponentTool);

            this.setState({
                updatedStat: result,
                stats: this.getUpdateStats(result),
                opponentTool,
                resultText: this.getResultText(result),
                animationToggled: false
            })
        }, 3000);
    }

    nullifySelections = () => {
        this.setState({ ...nullifiedGameState });
    }

    render() {
        const { classes } = this.props;
        const { userTool, animationToggled } = this.state;

        return (
            <div className={classes.container}>
                <Description stats={this.state.stats} />
                <div className={classes.rpsGameContainer}>
                    <User
                        userTool={userTool}
                        onToolClick={this.onToolClick}
                    />
                    <GameStatus
                        userTool={userTool}
                        animationToggled={animationToggled}
                        resultText={this.state.resultText}
                        onPlayAgainClick={this.nullifySelections}
                    />
                    <Opponent
                        opponentTool={this.state.opponentTool}
                        animationToggled={animationToggled}
                    />
                </div>
            </div>
        );
    }
}

RockPaperScissors.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RockPaperScissors);
