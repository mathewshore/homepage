import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    scissorsButtonRoot: {
        marginLeft: theme.spacing.unit * 1.5,
    }
});

const getToolClassName = (toolValue, classes) =>
    toolValue === 'scissors'
        ? { classes: { root: classes.scissorsButtonRoot } }
        : {};

const ToolButton = props => {
    const { classes, disabled, tool, onClick } = props;
    const buttonProps = {
        disabled,
        onClick,
        ...getToolClassName(tool.value, classes)
    };
    return (
        <Button variant='fab' {...buttonProps}>{props.children}</Button>
    );
};

export default withStyles(styles, { withTheme: true })(ToolButton);
