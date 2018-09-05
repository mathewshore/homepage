import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import ToolButton from './ToolButton';
import { tools } from './tools';


const styles = theme => ({
    toolWrapper: {
        padding: 10,
    },
    scissorsButton: {
        marginLeft: 10,
    }
});

class RPSUserBlock extends React.Component {
    static getTool(toolValue) {
        return tools.find((tool) => toolValue === tool.value);
    }

    renderUserTools(classes) {
        const { userTool } = this.props;

        if (userTool) {
            const tool = RPSUserBlock.getTool(userTool);

            return (
                <div>
                    <ToolButton
                        disabled={true}
                        tool={tool}
                        onClick={this.props.onToolClick}
                    />
                </div>
            );
        }

        const rock = tools[0];
        const paper = tools[1];
        const scissors = tools[2];

        return (
            <div>
                <div>
                    <ToolButton
                        tool={rock}
                        onClick={this.props.onToolClick}
                    />
                </div>
                <div>
                    <ToolButton
                        tool={paper}
                        onClick={this.props.onToolClick}
                    />
                    <ToolButton
                        tool={scissors}
                        onClick={this.props.onToolClick}
                        buttonClass={classes.scissorsButton}
                    />
                </div>
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={{  textAlign: 'center' }}>
                <Typography variant='display1'>You</Typography>
                <div className={classes.toolWrapper}>
                    { this.renderUserTools(classes) }
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(RPSUserBlock);
