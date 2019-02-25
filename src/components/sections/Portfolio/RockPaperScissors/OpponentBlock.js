import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutline from '@material-ui/icons/HelpOutline';
import grey from '@material-ui/core/colors/grey';

import PlayerBlock from './PlayerBlock';
import RPSAnimation from './RPSAnimation';
import ToolButton from './ToolButton';
import tools from './tools';
import { getTool } from './helpers';


const styles = {
    opponentBlock: {
        textAlign: 'center'
    },
    waitingIcon: {
        fontSize: 56,
        fill: grey[600]
    }
};

const renderOpponentBlockContent = (
    animationToggled,
    opponentTool,
    classes
) => {
    if (animationToggled) {
        return <RPSAnimation />;
    }

    const tool = getTool(opponentTool);
    return tool ? (
        <ToolButton disabled tool={tool}>
            {tool.icon}
        </ToolButton>
    ) : (
        <Tooltip title="Opponent is waiting for your selection.">
            <HelpOutline className={classes.waitingIcon} />
        </Tooltip>
    );
};

const OpponentBlock = props => (
    <PlayerBlock title="Opponent">
        {renderOpponentBlockContent(
            props.animationToggled,
            props.opponentTool,
            props.classes
        )}
    </PlayerBlock>
);

OpponentBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    animationToggled: PropTypes.bool.isRequired,
    opponentTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default withStyles(styles)(OpponentBlock);
