import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';


const styles = ({ spacing }) => ({
    resetButton: {
        display: 'block',
        margin: 'auto',
        marginTop: spacing.unit * 3
    }
});

const ResetButton = props => {
    const { classes } = props;

    return (
        <Button
            {...omit(props, ['classes'])}
            classes={{ root: classes.resetButton }}
        />
    );
};

ResetButton.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    children: 'Reset board'
};

ResetButton.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default withStyles(styles)(ResetButton);
