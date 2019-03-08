import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = {
    textContainerRoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const StatusText = props => {
    const { classes } = props;
    
    return (
        <Typography classes={{ root: classes.textContainerRoot }}>
            {props.children}
        </Typography>
    );
};

StatusText.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array
};

export default withStyles(styles)(StatusText);