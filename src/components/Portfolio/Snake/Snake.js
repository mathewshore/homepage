import React from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/get';
import findIndex from 'lodash/findIndex';
import toString from 'lodash/toString';
import random from 'lodash/random';

import withStyles from '@material-ui/core/styles/withStyles';

import Description from './Description';
import GameGrid from './GameGrid';
import EndScreen from './EndScreen';

import { GRID_HEIGHT, GRID_WIDTH, INITIAL_GAME_TEMPO } from './constants';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    snakeContainer: {
        position: 'relative',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
        marginTop: spacing.unit * 3,
        marginBottom: spacing.unit * 2,

        [breakpoints.up('md')]: {
            marginTop: 0,
            marginBottom: 0
        },
    }
});

const directions = {
    w: 'up',
    ArrowUp: 'up',
    s: 'down',
    ArrowDown: 'down',
    a: 'left',
    ArrowLeft: 'left',
    d: 'right',
    ArrowRight: 'right',
};

const isOppositeDirection = (currentDirection, newDirection) => (
    (
        (newDirection === 'right') &&
        (currentDirection === 'left')
    ) || (
        (newDirection === 'left') &&
        (currentDirection === 'right')
    ) || (
        (newDirection === 'up') &&
        (currentDirection === 'down')
    ) || (
        (newDirection === 'down') &&
        (currentDirection === 'up')
    )
);

export const collides = (locationA, locationB) =>
    toString(locationA) === toString(locationB);

const randomizeCoordinates = (
    xMin = 0,
    xMax = GRID_WIDTH,
    yMin = 0,
    yMax = GRID_HEIGHT
) => {
    const x = random(xMin, xMax - 1);
    const y = random(yMin, yMax - 1);
    return [x, y];
};

const getNextHeadLocation = (currentLocation, direction) => {
    switch (direction) {
    case 'up':
        return [currentLocation[0] - 1, currentLocation[1]];
    case 'down':
        return [currentLocation[0] + 1, currentLocation[1]];
    case 'left':
        return [currentLocation[0], currentLocation[1] - 1];
    case 'right':
        return [currentLocation[0], currentLocation[1] + 1];
    default:
        return undefined;
    }
};

class Snake extends React.Component {
    state = {
        gameIsRunning: false,
        score: 0,
        direction: '', // up, down, left, right,
        snakeTrail: [], // 1st index = head of snake, last index = tail
        gameOver: false,
        foodLocation: undefined,
        tempoMultiplier: INITIAL_GAME_TEMPO
    };

    snakeMoveInterval = undefined;

    addKeyDownListener = () => {
        document.addEventListener('keydown', this.handleKeyDown)
    };

    removeKeyDownListener = () => {
        document.removeEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        this.removeKeyDownListener();
        this.clearSnakeMoveInterval();
    }

    directionIsInwards = (newDirection) => {
        const { snakeTrail } = this.state;
        if (snakeTrail.length === 1) {
            return false;
        }
        const nextHeadLocation = getNextHeadLocation(snakeTrail[0], newDirection);
        return collides(snakeTrail[1], nextHeadLocation);
    };

    handleKeyDown = (e) => {
        const newDirection = get(directions, e.key);
        if (newDirection) {
            const { direction } = this.state;
            const directionIsOpposite = isOppositeDirection(direction, newDirection);
            const directionIsInwards = this.directionIsInwards(newDirection);
            if (
                (direction !== newDirection) &&
                (!directionIsOpposite) &&
                (!directionIsInwards)
            ) {
                this.setState({ direction: newDirection });
            }
        }
    };

    spawnFood = () => {
        const { snakeTrail } = this.state;
        let spawnIsValid = false;
        while (!spawnIsValid) {
            const foodLocation = randomizeCoordinates();
            const foodInSnakeIndex = findIndex(snakeTrail, part => collides(part, foodLocation));
            if (foodInSnakeIndex === -1) {
                spawnIsValid = true;
                this.setState({ foodLocation });
            }
        }
    };

    snakeHitsWall = nextLocation => {
        const domainHeightMin = 0;
        const domainHeightMax = GRID_HEIGHT - 1;
        const domainWidthMin = 0;
        const domainWidthMax = GRID_WIDTH - 1;
        if (
            (nextLocation[0] < domainHeightMin) ||
            (nextLocation[0] > domainHeightMax) ||
            (nextLocation[1] < domainWidthMin) ||
            (nextLocation[1] > domainWidthMax)
        ) {
            return true;
        }
        return false;
    };

    handleWallHit = () => {
        this.endGame();
    };

    handleItselfHit = () => {
        this.endGame();
    };

    handleFoodHit = (nextHeadLocation) => {
        const { snakeTrail, score, tempoMultiplier } = this.state;
        snakeTrail.unshift(nextHeadLocation);
        this.setState({
            score: score + 1,
            snakeTrail,
            tempoMultiplier: tempoMultiplier * 0.9
        }, () => {
            this.spawnFood();
            this.clearSnakeMoveInterval();
            this.setSnakeMoveInterval();
        });
    };

    snakeHitsFood = (nextHeadLocation) =>
        toString(nextHeadLocation) === toString(this.state.foodLocation);

    snakeHitsItself = (nextHeadLocation) => {
        const { snakeTrail } = this.state;
        const nextLocation = toString(nextHeadLocation);
        const collisionIndex = findIndex(snakeTrail, part => toString(part) === nextLocation);
        if (collisionIndex >= 0) {
            const tailIndex = snakeTrail.length - 1;
            return collisionIndex !== tailIndex;
        }
        return false;
    };

    moveSnake = () => {
        const { snakeTrail, direction } = this.state;
        const headLocation = snakeTrail[0];
        const nextHeadLocation = getNextHeadLocation(headLocation, direction);

        if (this.snakeHitsWall(nextHeadLocation)) {
            this.handleWallHit();
        } else if (this.snakeHitsFood(nextHeadLocation)) {
            this.handleFoodHit(nextHeadLocation);
        } else if (this.snakeHitsItself(nextHeadLocation)) {
            this.handleItselfHit();
        } else {
            snakeTrail.pop();
            snakeTrail.unshift(nextHeadLocation);
            this.setState({ snakeTrail });
        }
    };

    endGame = () => {
        this.clearSnakeMoveInterval();
        this.removeKeyDownListener();
        this.setState({
            gameIsRunning: false,
            gameOver: true
        });
    };

    clearSnakeMoveInterval = () => {
        clearInterval(this.snakeMoveInterval);
    };

    setSnakeMoveInterval = () => {
        const interval = 1000 * this.state.tempoMultiplier;
        this.snakeMoveInterval = setInterval(this.moveSnake, interval);
    };

    startGame = () => {
        clearInterval(this.snakeMoveInterval);
        this.addKeyDownListener();
        // const snakeTrail = [[4, 10], [4, 9], [5, 9], [5, 8], [5, 7], [5, 6], [5, 5], [4, 5], [3, 5], [3, 4], [3, 3], [3, 2], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [14, 6], [14, 7], [14, 8], [14, 9], [14, 10], [13, 10], [12, 10], [11, 10], [10, 10], [10, 9], [10, 8], [9, 8], [8, 8], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13]]
        
        this.setState({
            score: 0,
            gameOver: false,
            gameIsRunning: true,
            tempoMultiplier: INITIAL_GAME_TEMPO,
            direction: ['up', 'down', 'left', 'right'][random(0, 3)],
            snakeTrail: [[7, 8]] // Spawn snake in the center of the grid. ToDo: do this dynamically using grid width & height
        }, () => {
            this.spawnFood();
            this.setSnakeMoveInterval();
        });
    }

    render() {
        const { classes } = this.props;
        const { gameOver, gameIsRunning } = this.state;

        return (
            <div className={classes.container}>
                <Description />
                <div className={classes.snakeContainer}>
                    {!gameIsRunning && (
                        <EndScreen
                            onStartClick={this.startGame}
                            gameOver={gameOver}
                            score={this.state.score}
                        />
                    )}
                    <GameGrid
                        snakeTrail={this.state.snakeTrail}
                        domain={[GRID_HEIGHT, GRID_WIDTH]}
                        foodLocation={this.state.foodLocation}
                    />
                </div>
            </div>
        );
    }
}

Snake.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Snake);
