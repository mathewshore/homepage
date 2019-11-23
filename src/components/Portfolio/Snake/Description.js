import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import DescriptionContainer from '../../common/DescriptionContainer';
import Controls from './Controls';


const styles = ({ spacing }) => ({
    descriptionTypography: {
        marginBottom: spacing.unit * 3
    },
    captionText: {
        fontStyle: 'italic',
        marginBottom: spacing.unit * 2
    }
});

const Description = props => {
    const { classes } = props;
    return (
        <DescriptionContainer>
            <Typography className={classes.captionText}>
                Badger badger badger badger badger... A snake, a snakeee, snaaaake!
            </Typography>
            <Typography className={classes.descriptionTypography}>
                I wanted spice up things and challenge myself by creating a game which
                would rely on keyboard interaction, but I wasn't sure what to create.
                Luckily few days after getting the initial idea, I saw our chihuahua
                crawl like a worm while playing on the floor. I had the moment of
                lightbulb switching on. At the beginning of 2000s, I had this Nokia
                phone which had some catchy games on it. I used to play one of the games
                a lot, to an extent I was a force to be reckoned with. The title of the
                game was – Snake. I wanted to relive the moments, but this time by coding
                the game.
            </Typography>
            <Controls />
        </DescriptionContainer>
    );
};

Description.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Description);
