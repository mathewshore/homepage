import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing }) => ({
    gameOverContainer: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: spacing.unit
    }
});

const GameOver = props => {
    const { classes } = props;
    return (
        <div className={classes.gameOverContainer}>
            GAME OVER
        </div>
    );
};

GameOver.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameOver);
