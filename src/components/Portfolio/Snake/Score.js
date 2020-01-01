import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing }) => ({
    typographyRoot: {
        marginBottom: spacing.unit * 1.5
    }
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
        <Typography classes={{ root: classes.typographyRoot }}>
            Score: {formatScoreText(props.score)}
        </Typography>
    );
};

Score.propTypes = {
    classes: PropTypes.object.isRequired,
    score: PropTypes.number
};

export default withStyles(styles)(Score);
