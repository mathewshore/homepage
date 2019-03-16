import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing }) => ({
    textContainerRoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: spacing.unit
    }
});

const StatusText = props => {
    const { classes } = props;
    
    return (
        <Typography
            variant="body2"
            classes={{ root: classes.textContainerRoot }}
        >
            {props.children}
        </Typography>
    );
};

StatusText.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array
};

export default withStyles(styles)(StatusText);