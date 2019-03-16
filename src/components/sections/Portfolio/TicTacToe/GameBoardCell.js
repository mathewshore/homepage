import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';


const styles = ({ spacing, shadows }) => ({
    boardCell: {
        margin: spacing.unit * 0.5,
        width: spacing.unit * 10,
        height: spacing.unit * 10,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: shadows[6],
        '&:hover': {
            background: grey[100]
        },
        '&.disabled': {
            cursor: 'initial',
            background: 'none',
            boxShadow: shadows[1],
        },
        '&.win-cell': {
            backgroundColor: green[100],
        },
    }
});

const getDisabledClass = isDisabled => isDisabled ? ' disabled' : '';

const getWinCellClass = isWinCell => isWinCell ? ' win-cell' : '';

const GameBoardCell = props => {
    const { classes, disabled } = props;
    const disabledClass = getDisabledClass(disabled);
    const winCellClass = getWinCellClass(props.isWinCell);
    const extraClasses = ['', winCellClass, disabledClass];

    return (
        <Paper
            disabled={disabled}
            component={ButtonBase}
            className={classes.boardCell + join(extraClasses, ' ')}
            onClick={props.onClick}
        >
            {props.children}
        </Paper>
    );
};

GameBoardCell.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element
};

export default withStyles(styles)(GameBoardCell);