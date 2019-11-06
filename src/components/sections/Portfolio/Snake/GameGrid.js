import React from 'react';
import PropTypes from 'prop-types';

import times from 'lodash/times';
import find from 'lodash/find';
import join from 'lodash/join';
import isArray from 'lodash/isArray';

import withStyles from '@material-ui/core/styles/withStyles';
import { collides } from './Snake';


const styles = ({ spacing }) => ({
    row: {
        display: 'flex'
    },
    cell: {
        height: spacing.unit * 2,
        width: spacing.unit * 2,
        border: '1px solid black',
        '&.snake-cell': {
            background: 'gray',
        },
        '&.food-cell': {
            background: 'green'
        }
    }
});

const isFoodCell = (foodLocation, cellCoordinates) =>
    foodLocation && collides(foodLocation, cellCoordinates);

const GameGrid = props => {
    const { classes, snakeTrail } = props;
    const [domainHeight, domainWidth] = props.domain;

    return (
        <div>
            {times(domainHeight, i => (
                <div className={classes.row} key={i}>
                    {times(domainWidth, j => {
                        const isSnakeCell = find(snakeTrail, cell =>
                            (cell[0] === i && cell[1] === j)
                        );
                        const cellClassNames = [classes.cell];
                        if (isArray(isSnakeCell)) {
                            cellClassNames.push('snake-cell');
                        }
                        if (isFoodCell(props.foodLocation, [i, j])) {
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
