import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';


const styles = ({ spacing }) => ({
    buttonRoot: {
        color: 'white',
        display: 'block',
        margin: `${spacing.unit * 2}px auto`,
        width: 160,
    }
});

const MenuButton = props => {
    const { classes } = props;
    return (
        <Button
            {...omit(props, ['classes'])}
            classes={{ root: classes.buttonRoot }}
        />
    )
};

MenuButton.defaultProps = {
    variant: 'contained',
    color: 'primary'
};

MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
};

export default withStyles(styles)(MenuButton);
