import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';
import Tooltip from '@material-ui/core/Tooltip';
import QuestionMarkIcon from '@material-ui/icons/HelpOutline';

import RPSAnimation from '../RPSAnimation';
import ToolButton from '../ToolButton';

import tools from '../tools';
import { getTool } from '../helpers';


const styles = ({ breakpoints }) => ({
    questionMarkIcon: {
        fontSize: 80,
        fill: grey[500],
        [breakpoints.down('sm')]: {
            fontSize: 60
        }
    }
});

const OpponentBlockContent = (props) => {
    if (props.animationToggled) {
        return <RPSAnimation withLargeIcon />;
    }

    const { classes } = props;
    const tool = getTool(props.opponentTool);

    if (tool) {
        return (
            <ToolButton
                disabled
                withLargeIcon
                tool={tool}
            />
        );
    }

    return (
        <Tooltip title="Opponent is waiting for your selection.">
            <QuestionMarkIcon className={classes.questionMarkIcon} />
        </Tooltip>
    );
};

OpponentBlockContent.propTypes = {
    classes: PropTypes.object.isRequired,
    animationToggled: PropTypes.bool.isRequired,
    opponentTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default withStyles(styles)(OpponentBlockContent);
