import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';


const styles = ({ spacing, shadows, breakpoints }) => ({
    boardCell: {
        margin: spacing.unit * 0.5,
        width: spacing.unit * 10,
        height: spacing.unit * 10,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: shadows[5],
        background: grey[50],
        '&:hover': {
            background: grey[300]
        },
        '&.disabled': {
            cursor: 'initial',
            background: 'none',
            boxShadow: shadows[1],
        },
        '&.win-cell': {
            backgroundColor: green[100],
        },
        [breakpoints.up('xs')]: {
            minWidth: '13vh',
            minHeight: '13vh'
        },
        [breakpoints.up('md')]: {
            minWidth: '13vh',
            minHeight: '13vh'
        }
    }
});

const GameBoardCell = props => {
    const { classes, disabled } = props;
    const classNames = [classes.boardCell];
    if (props.disabled) {
        classNames.push('disabled');
    }
    if (props.isWinCell) {
        classNames.push('win-cell');
    }

    return (
        <Paper
            disabled={disabled}
            component={ButtonBase}
            className={join(classNames, ' ')}
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