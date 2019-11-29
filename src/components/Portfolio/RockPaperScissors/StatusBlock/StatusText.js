import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import size from 'lodash/size';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing }) => ({
    statusTypographyRoot: {
        margin: `${spacing.unit * 2}px 0`
    }
});

const getStatusText = (resultText, animationToggled) => {
    if (!resultText) {
        return animationToggled
            ? 'Opponent is choosing'
            : 'Choose your tool';
    }

    // Todo: simplify the text formatting.
    const textStrings = resultText.split(' ');
    const result = textStrings.splice((size(textStrings) - 1), 1);
    return (
        <Fragment>
            {join(textStrings, ' ')} <b>{result}</b>
        </Fragment>
    );
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
    resultText: PropTypes.string,
    onPlayAgainClick: PropTypes.func.isRequired
};

export default withStyles(styles)(StatusText);
