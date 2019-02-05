import React from 'react';

import Grid from '@material-ui/core/Grid';

import Table from '../../../common/Table';
import RPSUserBlock from './RPSUserBlock';
import RPSResultBlock from './RPSResultBlock';
import RPSOpponentBlock from './RPSOpponentBlock';
import tools from './tools';


export default class RockPaperScissors extends React.Component {
    state = {
        stats: {
            w: 0,
            d: 0,
            l: 0
        },
        userTool: null,
        opponentTool: null,
        animationToggled: false,
        resultText: null,
        updatedStat: null
    };

    gameStateTimeoutFunction = null;

    componentWillUnmount() {
        if (this.gameStateTimeoutFunction) {
            // Stop animation and state update when modal is closed before round is finished.
            clearTimeout(this.gameStateTimeoutFunction);
        }
    }

    getOpponentTool() {
        const min = Math.ceil(0);
        const max = Math.floor(2);
        const randomToolIndex = Math.floor(Math.random() * (max - min + 1)) + min;

        return tools[randomToolIndex].value;
    }

    getResult(userTool, opponentTool) {
        if (userTool === opponentTool) {
            return 'd';
        }
        const toolRuleObj = tools.find((tool) => (tool.value === userTool));
        return (toolRuleObj.beats === opponentTool) ? 'w' : 'l';
    }

    getResultText(result) {
        if (['w', 'l'].includes(result)) {
            return result === 'w' ? 'You are Victorious!' : 'You were Defeated.'
        }
        return 'It is a Draw.';
    }

    getIncrementedStats(result) {
        const { stats } = this.state;
        stats[result]++;
        return stats;
    }

    onToolClick = userTool => () => {
        const opponentTool = this.getOpponentTool();
        this.setState({ userTool, animationToggled: true });

        const result = this.getResult(userTool, opponentTool);
        const resultText = this.getResultText(result);

        this.gameStateTimeoutFunction = setTimeout(() => (
            this.setState({
                stats: this.getIncrementedStats(result),
                updatedStat: result,
                opponentTool,
                resultText,
                animationToggled: false
            })
        ), 3000);
    }

    nullifySelections = () => {
        this.setState({
            userTool: null,
            opponentTool: null,
            updatedStat: null
        });
    }

    render() {
        const { userTool, opponentTool, animationToggled, stats } = this.state;

        const dataMapping = [
            { dataKey: 'w', label: 'Victories' },
            { dataKey: 'd', label: 'Draws' },
            { dataKey: 'l', label: 'Defeats' }
        ];

        return (
            <Grid container style={{ overflow: 'auto' }}>
                <Grid item xs={12} md={8}>
                    <Grid container>
                        <Grid item xs={4}>
                            <RPSUserBlock
                                userTool={userTool}
                                onToolClick={this.onToolClick}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <RPSResultBlock
                                userTool={userTool}
                                animationToggled={animationToggled}
                                resultText={this.state.resultText}
                                onPlayAgainClick={this.nullifySelections}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <RPSOpponentBlock
                                opponentTool={opponentTool}
                                animationToggled={animationToggled}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Table dataMapping={dataMapping} data={[stats]} />
                </Grid>
            </Grid>
        );
    }
}
