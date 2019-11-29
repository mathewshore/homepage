import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Description from './Description';
import streamPortalImage from '../portfolio_images/stream_portal_portfolio.png';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    landingPageImage: {
        width: '100%',
        [breakpoints.up('xs')]: {
            maxWidth: spacing.unit * 67.5 // 540px
        },
        [breakpoints.up('sm')]: {
            maxWidth: spacing.unit * 70 // 560px
        },
        [breakpoints.up('md')]: {
            minWidth: spacing.unit * 70 // 560px
        },
        [breakpoints.up('lg')]: {
            minWidth: spacing.unit * 75 // 600px
        },
    },
});

const StreamPortal = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Description />
            <div>
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
