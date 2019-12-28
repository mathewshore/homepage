import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing }) => ({
    container: {
        background: 'black',
        color: 'white',
        padding: `${spacing.unit}px 0px`,
        marginBottom: spacing.unit * 1.5,
        borderRadius: 2
    },
});

const formatScoreText = score => {
    if (score < 10) {
        return `000${score}`;
    } else if (score < 100) {
        return `00${score}`;
    } else if (score < 1000) {
        return `0${score}`;
    }
    return '';
};

const Score = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            SCORE: {formatScoreText(props.score)}
        </div>
    );
};

Score.propTypes = {
    classes: PropTypes.object.isRequired,
    score: PropTypes.number
};

export default withStyles(styles)(Score);
