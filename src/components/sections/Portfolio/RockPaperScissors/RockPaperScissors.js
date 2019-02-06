import React from 'react';
import random from 'lodash/random';
import find from 'lodash/find';
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

export default class RockPaperScissors extends React.Component {
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

    getRandomTool = () => tools[random(0, 2)].value;

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

    getIncrementedStats(result) {
        const { stats } = this.state;
        stats[result]++;
        return stats;
    }

    onToolClick = userTool => () => {
        this.setState({ userTool, animationToggled: true });

        this.gameStateTimeoutFunction = setTimeout(() => {
            const opponentTool = this.getRandomTool();
            const result = this.getResult(userTool, opponentTool);
            const resultText = this.getResultText(result);
            this.setState({
                stats: this.getIncrementedStats(result),
                updatedStat: result,
                opponentTool,
                resultText,
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
            <Grid container style={{ overflow: 'auto' }}>
                <Grid item xs={12} md={8}>
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
                </Grid>
                <Grid item xs={12} md={4}>
                    <Table dataMapping={dataMapping} data={[this.state.stats]} />
                </Grid>
            </Grid>
        );
    }
}
