import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import SocialMediaLinks from '../SocialMediaLinks';
import Copyright from './Copyright';


const styles = ({ spacing, palette }) => ({
    footerContainer: {
        position: 'relative',
        background: palette.background.footer,
        padding: `${spacing.unit * 6}px 0px ${spacing.unit * 8}px`,
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    footerContent: {
        width: '100%'
    },
});

const Footer = props => {
    const { classes } = props;

    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerContent}>
                <SocialMediaLinks />
                <Copyright />
            </div>
        </div>
    );
};


Footer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Footer);
