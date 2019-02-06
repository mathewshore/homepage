import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import ToolButton from './ToolButton';
import tools from './tools';


const styles = theme => ({
    userBlock: {
        textAlign: 'center'
    },
    toolWrapper: {
        padding: theme.spacing.unit * 1.5,
    },
});

const UserBlock = props => {
    const { classes, userTool } = props;
    const [rock, paper, scissors] = tools;

    const getButtonProps = tool => ({
        tool,
        disabled: tool.value === userTool,
        onClick: props.onToolClick(tool.value),
        children: tool.icon
    });

    return (
        <div className={classes.userBlock}>
            <Typography variant='display1'>You</Typography>
            <div className={classes.toolWrapper}>
                <div>
                    <ToolButton {...getButtonProps(rock)} />
                </div>
                <div>
                    <ToolButton {...getButtonProps(paper)} />
                    <ToolButton
                        {...getButtonProps(scissors)}
                        buttonClass={classes.scissorsButton}
                    />
                </div>
            </div>
        </div>
    );
};

UserBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    onToolClick: PropTypes.func,
    userTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default withStyles(styles, { withTheme: true })(UserBlock);
