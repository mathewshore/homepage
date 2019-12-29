import React from 'react';
import PropTypes from 'prop-types';

import pick from 'lodash/pick';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const styles = ({ spacing, palette, breakpoints }) => ({
    buttonRoot: {
        background: '#fff !important',

        '&.selected': {
            border: `2px solid ${palette.primary.light}`
        },
        [breakpoints.down('sm')]: {
            margin: spacing.unit,
            width: spacing.unit * 6,
            height: spacing.unit * 6,
        },
        [breakpoints.up('md')]: {
            margin: spacing.unit * 1.5,
            display: 'flex',
            justifyContent: 'center'
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
