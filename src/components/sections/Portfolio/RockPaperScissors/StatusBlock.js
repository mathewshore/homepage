import React from 'react';
import PropTypes from 'prop-types';
import size from 'lodash/size';
import join from 'lodash/join';

import Button from '@material-ui/core/Button';


const renderStatusText = (animationToggled, resultText) => {
    if (animationToggled || !resultText) {
        return <p>{animationToggled ? 'Opponent is choosing' : 'Choose your tool'}</p>;
    }
    const textStrings = resultText.split(' ');
    const result = textStrings.splice((size(textStrings) - 1), 1);
    return (
        <p>{join(textStrings, ' ')} <b>{result}</b></p>
    );
}

const StatusBlock = props => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontWeight: 'bold', margin: '20px 0' }}>VS</h3>
            {/* {renderBlockContent(props)} */}
            {renderStatusText(props.animationToggled, props.resultText)}
            {props.resultText && (
                <Button color='primary' onClick={props.onPlayAgainClick}>
                    Play again
                </Button>
            )}
        </div>
    );
};

StatusBlock.propTypes = {
    userTool: PropTypes.string,
    animationToggled: PropTypes.bool,
    resultText: PropTypes.string,
    onPlayAgainClick: PropTypes.func.isRequired
};

export default StatusBlock;
