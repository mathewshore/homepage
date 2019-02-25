import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
    buttonRoot: {
        margin: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit}px`,
        background: '#fff',
        '&.selected': {
            border: `2px solid ${grey[400]}`,
            background: '#fff'
        }
    }
});

const ToolButton = props => {
    const { classes, tool } = props;
    const scissorsClass = tool.value === 'scissors' ? classes.scissorsButtonRoot : '';
    const selectedClass = props.selected ? ' selected' : '';

    return (
        <Tooltip title={tool.value} placement={props.tooltipPlacement}>
            <span>
                <Button
                    {...pick(props, [
                        'disabled',
                        'onClick',
                        'children'
                    ])}
                    variant="fab"
                    classes={{ root: `${classes.buttonRoot} ${scissorsClass}${selectedClass}` }}
                />
            </span>
        </Tooltip>
    );
};

ToolButton.defaultProps = {
    tooltipPlacement: 'right'
};

ToolButton.propTypes = {
    classes: PropTypes.object.isRequired,
    tooltipPlacement: PropTypes.string,
    disabled: PropTypes.bool,
    tool: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.element
};

export default withStyles(styles)(ToolButton);
