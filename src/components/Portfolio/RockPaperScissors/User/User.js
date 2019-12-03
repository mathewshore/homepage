import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import isNil from 'lodash/isNil';

import withStyles from '@material-ui/core/styles/withStyles';

import PlayerBlock from '../PlayerBlock';
import ToolContainer from '../ToolContainer';
import ToolButton from '../ToolButton';
import tools from '../tools';


const styles = {
    bottomTools: {
        display: 'flex',
        justifyContent: 'center'
    }
};

const User = props => {
    const { classes, userTool } = props;
    const [rock, paper, scissors] = tools;

    const getButtonProps = tool => ({
        tool,
        noBgColor: true,
        disabled: !isNil(userTool),
        onClick: props.onToolClick(tool.value),
        selected: userTool === tool.value
    });

    return (
        <PlayerBlock title="You">
            <ToolContainer>
                <ToolButton {...getButtonProps(rock)} />
                <div className={classes.bottomTools}>
                    <ToolButton {...getButtonProps(paper)} tooltipPlacement="left" />
                    <ToolButton {...getButtonProps(scissors)} />
                </div>
            </ToolContainer>
        </PlayerBlock>
    );
};

User.propTypes = {
    classes: PropTypes.object.isRequired,
    onToolClick: PropTypes.func,
    userTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default withStyles(styles)(User);
