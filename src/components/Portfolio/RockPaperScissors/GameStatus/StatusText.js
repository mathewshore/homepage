import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing, breakpoints }) => ({
    statusTypographyRoot: {
        margin: `${spacing.unit * 1.5}px 0 ${spacing.unit * 2}px`,
        fontWeight: 'bold',
        [breakpoints.down('sm')]: {
            fontSize: 14
        }
    }
});

const StatusText = (props) => {
    const { classes } = props;
    const classNames = [classes.statusTypographyRoot];
    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <Typography classes={{ root: join(classNames, ' ') }}>
            {props.resultText}
        </Typography>
    );
};

StatusText.propTypes = {
    userTool: PropTypes.string,
    animationToggled: PropTypes.bool,
    resultText: PropTypes.string
};

export default withStyles(styles)(StatusText);
