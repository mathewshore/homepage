import React from 'react';
import PropTypes from 'prop-types';

import pick from 'lodash/pick';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const styles = ({ spacing, palette, breakpoints }) => ({
    buttonRoot: {
        margin: `${spacing.unit * 0.5}px ${spacing.unit}px`,
        background: '#fff',

        '&.selected': {
            border: `2px solid ${palette.primary.light}`,
            background: '#fff'
        },
        '&.bg-transparent': {
            background: palette.transparent
        },
        [breakpoints.down('sm')]: {
            padding: 12,
            width: spacing.unit * 6,
            height: spacing.unit * 6
        }
    }
});

const ToolButton = props => {
    const {
        classes,
        className,
        tool: {
            value,
            Icon
        }
    } = props;

    const buttonClassNames = [classes.buttonRoot];

    if (className) {
        buttonClassNames.push(className);
    }
    if (props.selected) {
        buttonClassNames.push('selected');
    }
    if (props.noBgColor) {
        buttonClassNames.push('bg-transparent')
    }

    return (
        <Tooltip
            title={value}
            placement={props.tooltipPlacement}
        >
            <span>
                <Button
                    {...pick(props, [
                        'disabled',
                        'onClick',
                        'variant'
                    ])}
                    classes={{ root: join(buttonClassNames, ' ') }}
                >
                    <Icon
                        {...pick(props, [
                            'withLargeIcon',
                            'selected'
                        ])}
                    />
                </Button>
            </span>
        </Tooltip>
    );
};

ToolButton.defaultProps = {
    tooltipPlacement: 'right',
    variant: 'fab'
};

ToolButton.propTypes = {
    classes: PropTypes.object.isRequired,
    tooltipPlacement: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    tool: PropTypes.object, // todo: define shape
    onClick: PropTypes.func,
    children: PropTypes.element
};

export default withStyles(styles)(ToolButton);
