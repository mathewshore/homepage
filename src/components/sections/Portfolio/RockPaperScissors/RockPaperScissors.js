import React, { Component } from 'react';
import PropTypes from 'prop-types';

import random from 'lodash/random';
import find from 'lodash/find';
import get from 'lodash/get';
import assign from 'lodash/assign';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Table from '../../../common/Table';
import UserBlock from './UserBlock';
import StatusBlock from './StatusBlock';
import OpponentBlock from './OpponentBlock';
import tools from './tools';


const styles = ({ spacing }) => ({
    rpsGameContainer: {
        marginTop: spacing.unit * 5
    }
});

const RESULT_TYPES = {
    WIN: 'w',
    LOOSE: 'l',
    DRAW: 'd'
};

const dataMapping = [
    {
        dataKey: RESULT_TYPES.WIN,
        label: 'Victories'
    },
    {
        dataKey: RESULT_TYPES.DRAW,
        label: 'Draws'
    },
    {
        dataKey: RESULT_TYPES.LOOSE,
        label: 'Defeats'
    }
];

const nullifiedGameState = {
    userTool: null,
    opponentTool: null,
    updatedStat: null,
    resultText: null
};

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
            // Stop animation and state update if modal is closed before round is finished.
            clearTimeout(this.gameStateTimeoutFunction);
        }
    }

    getRandomTool = () => get(tools[random(0, 2)], 'value');

    getResult(userTool, opponentTool) {
        if (userTool === opponentTool) {
            return RESULT_TYPES.DRAW;
        }
        const tool = find(tools, { value: userTool });
        return (tool.beats === opponentTool) ? RESULT_TYPES.WIN : RESULT_TYPES.LOOSE;
    }

    getResultText(result) {
        if (result === RESULT_TYPES.DRAW) {
            return 'It is a Draw.';
        }
        return result === RESULT_TYPES.WIN ? 'You are Victorious!' : 'You were Defeated.';
    }

    getUpdateStats = result => {
        const { stats } = this.state;
        const newStat = get(stats, result) + 1;
        return assign({}, stats, { [result]: newStat });
    };

    onToolClick = userTool => () => {
        this.setState({ userTool, animationToggled: true });

        this.gameStateTimeoutFunction = setTimeout(() => {
            const opponentTool = this.getRandomTool();
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
            <div>
                <Table
                    dataMapping={dataMapping}
                    data={[this.state.stats]}
                />
                <Grid container className={classes.rpsGameContainer}>
                    <Grid item xs={4}>
                        <UserBlock
                            userTool={userTool}
                            onToolClick={this.onToolClick}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <StatusBlock
                            userTool={userTool}
                            animationToggled={animationToggled}
                            resultText={this.state.resultText}
                            onPlayAgainClick={this.nullifySelections}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <OpponentBlock
                            opponentTool={this.state.opponentTool}
                            animationToggled={animationToggled}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

RockPaperScissors.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RockPaperScissors);
