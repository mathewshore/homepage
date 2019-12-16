import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';


const styles = ({ spacing }) => ({
    itemContentContainer: {
        maxHeight: spacing.unit * 32.5 // 260px
    },
    portfolioImage: {
        width: '100%',
        maxHeight: spacing.unit * 32.5
    },
});

const ImageCard = props => {
    const { classes } = props;
    return (
        <Paper
            component={ButtonBase}
            onClick={props.onClick}
        >
            <img
                src={props.imageSrc}
                className={classes.portfolioImage}
                alt={props.title}
            />
        </Paper>
    )
};

ImageCard.propTypes = {
    classes: PropTypes.object.isRequired,
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
};

export default withStyles(styles)(ImageCard);
