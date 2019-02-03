import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HelpOutline from '@material-ui/icons/HelpOutline';

import RPSUserBlock from './RPSUserBlock';
import RPSAnimation from './RPSAnimation';
import ToolButton from './ToolButton';


export default class RPSOpponentBlock extends React.Component {
    renderOpponentBlockContent() {
        const { animationToggled } = this.props;

        if (animationToggled) {
            return <RPSAnimation />;
        }

        const tool = RPSUserBlock.getTool(this.props.opponentTool);
        return tool ? <ToolButton disabled tool={tool} /> : <Button disabled><HelpOutline /></Button>;
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Typography variant='display1'>Opponent</Typography>
                {this.renderOpponentBlockContent()}
            </div>
        );
    }
}
