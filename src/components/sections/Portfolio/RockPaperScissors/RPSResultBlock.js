import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';


export default class RPSResultBlock extends React.Component {
    renderBlockContent() {
        const { userTool, animationToggled, resultText } = this.props;

        if (!userTool || animationToggled) {
            const text = !userTool ? 'Choose your tool' : 'Opponent is choosing';
            return <p>{text}</p>;
        }

        const resultTextStrings = resultText.split(' ');
        const resultTextEnd = resultTextStrings.splice((resultTextStrings.length - 1), 1);

        return (
            <div>
                <p>{resultTextStrings.join(' ')} <b>{resultTextEnd}</b></p>
                <Button color='primary' onClick={this.props.onPlayAgainClick}>
                    Play again
                </Button>
            </div>
        );
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontWeight: 'bold', margin: '20px 0' }}>VS</h3>
                {this.renderBlockContent()}
            </div>
        );
    }
}

RPSResultBlock.propTypes = {
    userTool: PropTypes.string,
    animationToggled: PropTypes.bool,
    resultText: PropTypes.string
};
