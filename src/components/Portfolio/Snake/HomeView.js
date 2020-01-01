import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Score from './Score';
import MenuButton from './MenuButton';
import ViewContainer from './ViewContainer';
import MenuHeader from './MenuHeader';


const styles = ({
    gameStatus: {
        textAlign: 'center'
    }
});

const HomeView = props => {
    const { classes, gameOver } = props;

    return (
        <ViewContainer>
            <div className={classes.gameStatus}>
                {gameOver && (
                    <Fragment>
                        <MenuHeader>Game over</MenuHeader>
                        <Score score={props.score} />
                    </Fragment>
                )}
                <MenuButton onClick={props.onControlsViewClick}>
                    Controls
                </MenuButton>
                <MenuButton onClick={props.onStartClick}>
                    {gameOver ? 'Play again' : 'Start'}
                </MenuButton>
            </div>
        </ViewContainer>
    );
};

HomeView.propTypes = {
    classes: PropTypes.object.isRequired,
    onStartClick: PropTypes.func,
    gameOver: PropTypes.bool,
    score: PropTypes.number
};

export default withStyles(styles)(HomeView);
