import React from 'react';

import ToolButton from './ToolButton';
import { tools } from './tools';


const TOOLS_PER_SECOND = 6;

export default class RPSAnimation extends React.Component {
    constructor() {
        super();

        this.toolIntervalFunction = setInterval(() => this.setToolIndex(), (1000 / TOOLS_PER_SECOND));

        this.state = {
            toolIndex: 0,
            count: 0
        };
    }

    setToolIndex() {
        let { toolIndex, count } = this.state;
        toolIndex++;
        toolIndex = toolIndex === tools.length ? 0 : toolIndex;
        count++;

        if (count >= ((TOOLS_PER_SECOND * tools.length) - 1)) {
            clearInterval(this.toolIntervalFunction);
        }

        this.setState({ toolIndex, count });
    }

    componentWillUnmount() {
        clearInterval(this.toolIntervalFunction);
    }

    render() {
        const tool = tools[this.state.toolIndex];

        return (
            <div>
                <ToolButton disabled tool={tool} onClick={this.props.onToolClick} />
            </div>
        )
    }
}
