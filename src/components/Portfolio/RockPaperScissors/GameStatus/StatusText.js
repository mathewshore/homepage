import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing, breakpoints }) => ({
    statusTypographyRoot: {
        margin: `${spacing.unit * 2}px 0`,
        [breakpoints.down('sm')]: {
            fontSize: 14
        }
    }
});

const getStatusText = (resultText, animationToggled) => {
    if (!resultText) {
        return animationToggled
            ? 'Opponent is choosing'
            : 'Choose your tool';
    }
    return <b>{resultText}</b>;
};

const StatusText = (props) => {
    const { classes } = props;

    return (
        <Typography classes={{ root: classes.statusTypographyRoot }}>
            {getStatusText(props.resultText, props.animationToggled)}
        </Typography>
    );
};

StatusText.propTypes = {
    userTool: PropTypes.string,
    animationToggled: PropTypes.bool,
    resultText: PropTypes.string
};

export default withStyles(styles)(StatusText);
