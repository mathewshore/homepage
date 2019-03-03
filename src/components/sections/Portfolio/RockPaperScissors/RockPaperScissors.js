import React, { Component } from 'react';

import random from 'lodash/random';
import find from 'lodash/find';
import get from 'lodash/get';
import assign from 'lodash/assign';

import Grid from '@material-ui/core/Grid';
import Table from '../../../common/Table';
import UserBlock from './UserBlock';
import StatusBlock from './StatusBlock';
import OpponentBlock from './OpponentBlock';
import tools from './tools';


const dataMapping = [
    { dataKey: 'w', label: 'Victories' },
    { dataKey: 'd', label: 'Draws' },
    { dataKey: 'l', label: 'Defeats' }
];

const nullifiedGameState = {
    userTool: null,
    opponentTool: null,
    updatedStat: null,
    resultText: null
};

export default class RockPaperScissors extends Component {
    state = {
        ...nullifiedGameState,
        animationToggled: false,
        stats: {
            w: 0,
            d: 0,
            l: 0
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
            return 'd';
        }
        const tool = find(tools, { value: userTool });
        return (tool.beats === opponentTool) ? 'w' : 'l';
    }

    getResultText(result) {
        if (result === 'd') {
            return 'It is a Draw.';
        }
        return result === 'w' ? 'You are Victorious!' : 'You were Defeated.'
    }

    setResultText = result => {
        this.setState({ resultText: this.getResultText(result) });
    };

    updateStats = result => {
        const { stats } = this.state;
        const newStat = get(stats, result) + 1;
        const updatedStats = assign({}, stats, { [result]: newStat });
        this.setState({ stats: updatedStats });
    };

    onToolClick = userTool => () => {
        this.setState({ userTool, animationToggled: true });

        this.gameStateTimeoutFunction = setTimeout(() => {
            const opponentTool = this.getRandomTool();
            const result = this.getResult(userTool, opponentTool);
            this.setResultText(result);
            this.updateStats(result);
            this.setState({
                updatedStat: result,
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
        const { userTool, animationToggled } = this.state;

        return (
            <div>
                <Table
                    dataMapping={dataMapping}
                    data={[this.state.stats]}
                />
                <Grid container>
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
