import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HelpOutline from '@material-ui/icons/HelpOutline';

import RPSAnimation from './RPSAnimation';
import ToolButton from './ToolButton';
import tools from './tools';
import { getTool } from './helpers';


const styles = {
    opponentBlock: {
        textAlign: 'center'
    }
};

const renderOpponentBlockContent = (animationToggled, opponentTool) => {
    if (animationToggled) {
        return <RPSAnimation />;
    }

    const tool = getTool(opponentTool);
    return tool ? (
        <ToolButton disabled tool={tool}>{tool.icon}</ToolButton>
    ) : (
        <Button disabled>
            <HelpOutline />
        </Button>
    );
};

const RPSOpponentBlock = props => (
    <div className={props.classes.opponentBlock}>
        <Typography variant='display1'>Opponent</Typography>
        {renderOpponentBlockContent(props.animationToggled, props.opponentTool)}
    </div>
);

RPSOpponentBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    animationToggled: PropTypes.bool.isRequired,
    opponentTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default withStyles(styles)(RPSOpponentBlock);
