import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing }) => ({
    typographyRoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: spacing.unit * 1.5,
        height: spacing.unit * 5
    }
});

const StatusText = props => {
    const { classes } = props;
    
    return (
        <Typography classes={{ root: classes.typographyRoot }}>
            {props.children}
        </Typography>
    );
};

StatusText.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array
};

export default withStyles(styles)(StatusText);