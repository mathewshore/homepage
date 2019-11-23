import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('md')]: {
            marginRight: spacing.unit * 3
        },
    }
});

const DescriptionContainer = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
};

DescriptionContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(DescriptionContainer);
