import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ToolButton from './ToolButton';
import tools from './tools';


const RPSAnimation = props => {
    const [toolIndex, setToolIndex] = useState(0);

    useEffect(() => {
        const onIntervalLoop = () => {
            const handleSetToolIndex = currentIndex => {
                const incrementedIndex = currentIndex + 1;
                return (incrementedIndex === tools.length)
                    ? 0 
                    : incrementedIndex;
            };
            setToolIndex(handleSetToolIndex);
        };
        const intervalTime = (1000 / props.toolsPerSecond);
        const toolInterval = setInterval(onIntervalLoop, intervalTime);
        return () => clearInterval(toolInterval);
    }, []);

    return (
        <ToolButton
            disabled
            withLargeIcon={props.withLargeIcon}
            className={props.className}
            tool={tools[toolIndex]}
        />
    )
};

RPSAnimation.defaultProps = {
    toolsPerSecond: 10
};

RPSAnimation.propTypes = {
    className: PropTypes.string,
    withLargeIcon: PropTypes.bool,
    toolsPerSecond: PropTypes.number
};

export default RPSAnimation;
