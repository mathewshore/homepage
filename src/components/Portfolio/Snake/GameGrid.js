import React from 'react';
import PropTypes from 'prop-types';

import times from 'lodash/times';
import find from 'lodash/find';
import join from 'lodash/join';
import isArray from 'lodash/isArray';

import withStyles from '@material-ui/core/styles/withStyles';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import { collides } from './Snake';
import { CELL_SIZE, CELL_SIZE_MIN } from './constants';


const styles = ({ breakpoints, spacing }) => ({
    row: {
        display: 'flex'
    },
    cell: {
        height: `${CELL_SIZE.XS.VALUE}${CELL_SIZE.XS.UNIT}`,
        minHeight: CELL_SIZE_MIN.VALUE,
        width: `${CELL_SIZE.XS.VALUE}${CELL_SIZE.XS.UNIT}`,
        minWidth: CELL_SIZE_MIN.VALUE,
        border: `1px solid ${grey[200]}`,
        borderRadius: 2,
        transition: 'all 0.1s ease',

        '&.snake-head-cell': {
            background: purple[800],
        },
        '&.snake-cell': {
            background: purple[400],
        },
        '&.food-cell': {
            background: green[500]
        },

        [breakpoints.up('md')]: {
            height: `${CELL_SIZE.MD.VALUE}${CELL_SIZE.MD.UNIT}`,
            width: `${CELL_SIZE.MD.VALUE}${CELL_SIZE.MD.UNIT}`
        },
    }
});

const isFoodCell = (foodLocation, cellCoordinates) =>
    foodLocation && collides(foodLocation, cellCoordinates);

const isSnakeHeadCell = (snakeHeadLocation, cellCoordinates) =>
    snakeHeadLocation && collides(snakeHeadLocation, cellCoordinates);

const isSnakeCell = (snakeTrail, cellCoordinates) => {
    const snakeCell = find(snakeTrail, cell => collides(cell, cellCoordinates));
    return isArray(snakeCell);
};

const GameGrid = props => {
    const { classes, snakeTrail } = props;
    const snakeHead = snakeTrail[0];
    const [domainHeight, domainWidth] = props.domain;

    return (
        <div>
            {times(domainHeight, i => (
                <div className={classes.row} key={i}>
                    {times(domainWidth, j => {
                        const cellClassNames = [classes.cell];
                        const cellCoordinates = [i, j];

                        if (isSnakeHeadCell(snakeHead, cellCoordinates)) {
                            cellClassNames.push('snake-head-cell');
                        } else if (isSnakeCell(snakeTrail, cellCoordinates)) {
                            cellClassNames.push('snake-cell');
                        }
                        if (isFoodCell(props.foodLocation, cellCoordinates)) {
                            cellClassNames.push('food-cell');
                        }
                        return (
                            <div className={join(cellClassNames, ' ')} key={j} />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

GameGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    snakeTrail: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number)
    ),
    domain: PropTypes.arrayOf(PropTypes.number),
    foodLocation: PropTypes.arrayOf(PropTypes.number)
};

export default withStyles(styles)(GameGrid);
