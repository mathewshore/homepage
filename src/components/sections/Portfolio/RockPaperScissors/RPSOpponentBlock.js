import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';

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
