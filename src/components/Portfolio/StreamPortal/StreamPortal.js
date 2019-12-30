import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Description from './Description';
import streamPortalImage from '../portfolio_images/stream_portal_portfolio.png';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    landingPageImage: {
        width: '100%',
        height: '100%',
        [breakpoints.up('xs')]: {
            maxWidth: '100%',
        },
        [breakpoints.down('sm')]: {
            marginTop: spacing.unit * 2
        },
        [breakpoints.up('md')]: {
            maxWidth: '60%',
            marginTop: 0
        },
        [breakpoints.up('xl')]: {
            maxWidth: '62%'
        }
    },
});

const StreamPortal = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Description />
            <img
                className={classes.landingPageImage}
                src={streamPortalImage}
                alt="stream-portal landing page"
            />
        </div>
    );
};

StreamPortal.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StreamPortal);
