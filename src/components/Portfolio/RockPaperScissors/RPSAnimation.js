import React from 'react';
import PropTypes from 'prop-types';
import ToolButton from './ToolButton';
import tools from './tools';


const TOOLS_PER_SECOND = 6;

export default class RPSAnimation extends React.Component {
    state = {
        toolIndex: 0,
        count: 0
    };

    toolInterval = setInterval(() => this.setToolIndex(), (1000 / TOOLS_PER_SECOND));

    componentWillUnmount() {
        clearInterval(this.toolInterval);
    }

    setToolIndex() {
        const count = this.state.count + 1;
        if (count >= ((TOOLS_PER_SECOND * tools.length) - 1)) {
            clearInterval(this.toolInterval);
        }

        const incrementedIndex = this.state.toolIndex + 1;
        const toolIndex = incrementedIndex === tools.length ? 0 : incrementedIndex;

        this.setState({ toolIndex, count });
    }

    render() {
        const tool = tools[this.state.toolIndex];

        return (
            <ToolButton
                disabled
                withLargeIcon={this.props.withLargeIcon}
                className={this.props.className}
                tool={tool}
            />
        )
    }
}

RPSAnimation.propTypes = {
    className: PropTypes.string,
    withLargeIcon: PropTypes.bool
};
