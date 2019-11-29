import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutline from '@material-ui/icons/HelpOutline';
import grey from '@material-ui/core/colors/grey';

import RPSAnimation from '../RPSAnimation';
import ToolButton from '../ToolButton';

import tools from '../tools';
import { getTool } from '../helpers';


const styles = {
    waitingIcon: {
        fontSize: 56,
        fill: grey[600]
    }
};

const OpponentBlockContent = (props) => {
    if (props.animationToggled) {
        return <RPSAnimation />;
    }

    const tool = getTool(props.opponentTool);
    if (tool) {
        return (
            <ToolButton disabled tool={tool}>
                {tool.icon}
            </ToolButton>
        );
    }

    const { classes } = props;
    return (
        <Tooltip title="Opponent is waiting for your selection.">
            <HelpOutline className={classes.waitingIcon} />
        </Tooltip>
    );
};

OpponentBlockContent.propTypes = {
    classes: PropTypes.object.isRequired,
    animationToggled: PropTypes.bool.isRequired,
    opponentTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default withStyles(styles)(OpponentBlockContent);
