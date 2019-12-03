import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing }) => ({
    container: {
        textAlign: 'center'
    },
    titleTypographyRoot: {
        marginBottom: spacing.unit * 2
    },
});

const PlayerBlock = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography
                variant="display1"
                classes={{ root: classes.titleTypographyRoot }}
            >
                {props.title}
            </Typography>
            {props.children}
        </div>
    );
};

PlayerBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default withStyles(styles)(PlayerBlock);
