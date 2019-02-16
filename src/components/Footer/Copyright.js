import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    copyrightContainer: {
        marginTop: theme.spacing.unit * 2
    }
});

const Copyright = props => {
    const { classes } = props;
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className={classes.copyrightContainer}>
            {`© ${currentYear} Matias Ranta. All rights reserved.`}
        </div>
    );
};

Copyright.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Copyright);
