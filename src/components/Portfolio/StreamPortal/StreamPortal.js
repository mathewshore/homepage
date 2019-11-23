import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Description from './Description';
import streamPortalImage from '../portfolio_images/stream_portal_portfolio.png';


const styles = ({ spacing }) => ({
    container: {
        display: 'flex'
    },
    imageContainer: {
        // todo: define container width
    },
    landingPageImage: {
        width: '100%'
    },
});

const StreamPortal = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Description />
            <div className={classes.imageContainer}>
                <img
                    className={classes.landingPageImage}
                    src={streamPortalImage}
                    alt="stream-portal landing page"
                />
            </div>
        </div>
    );
};

StreamPortal.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StreamPortal);
