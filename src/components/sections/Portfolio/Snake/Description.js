import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Controls from './Controls';


const styles = ({ spacing }) => ({
    container: {
        marginRight: spacing.unit * 2
    },
    descriptionTypography: {
        marginBottom: spacing.unit * 2
    }
});

const Description = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Typography className={classes.descriptionTypography}>
                Badger badger badger badger badger... A snake, a snakeee, snaaaake!
                Website is not complete without a little Snake game. This time I wanted
                to challenge myself by creating a game which relies on timely keyboard
                interaction. <i>Note: I haven't written support for mobile devices.</i>
            </Typography>
            <Controls />
        </div>
    );
};

Description.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Description);
