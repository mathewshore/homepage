import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import isNil from 'lodash/isNil';

import withStyles from '@material-ui/core/styles/withStyles';

import PlayerBlock from '../PlayerBlock';
import ToolContainer from '../ToolContainer';
import ToolButton from '../ToolButton';
import tools from '../tools';


const styles = ({ spacing, breakpoints }) => ({
    topContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    bottomContainer: {
        [breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    paperButton: {
        [breakpoints.up('md')]: {
            marginRight: spacing.unit * 3
        }
    }
});

const User = props => {
    const { classes, userTool } = props;
    const [rock, paper, scissors] = tools;

    const getButtonProps = tool => ({
        tool,
        disabled: !isNil(userTool),
        onClick: props.onToolClick(tool.value),
        selected: userTool === tool.value,
        className: classes.toolButton
    });

    return (
        <PlayerBlock title="You">
            <ToolContainer>
                <div className={classes.topContainer}>
                    <ToolButton {...getButtonProps(rock)} />
                </div>
                <div className={classes.bottomContainer}>
                    <ToolButton
                        {...getButtonProps(paper)}
                        tooltipPlacement="left"
                        className={classes.paperButton}
                    />
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
