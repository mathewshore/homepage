import React from 'react';
import PropTypes from 'prop-types';

import pick from 'lodash/pick';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import grey from '@material-ui/core/colors/grey';


const styles = ({ spacing }) => ({
    buttonRoot: {
        margin: `${spacing.unit * 0.5}px ${spacing.unit}px`,
        background: '#fff',
        '&.selected': {
            border: `2px solid ${grey[400]}`,
            background: '#fff'
        }
    },
});

const ToolButton = props => {
    const { classes } = props;

    const buttonClassNames = [classes.buttonRoot];
    if (props.selected) {
        buttonClassNames.push('selected');
    }

    return (
        <Tooltip
            title={props.tool.value}
            placement={props.tooltipPlacement}
        >
            <span>
                <Button
                    {...pick(props, [
                        'disabled',
                        'onClick',
                        'children'
                    ])}
                    variant="fab"
                    classes={{ root: join(buttonClassNames, ' ') }}
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
    tool: PropTypes.object, // todo: define shape
    onClick: PropTypes.func,
    children: PropTypes.element
};

export default withStyles(styles)(ToolButton);
