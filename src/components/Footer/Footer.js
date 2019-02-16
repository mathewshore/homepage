import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import SocialMediaButtons from '../SocialMediaButtons';
import Copyright from './Copyright';


const styles = ({ spacing, palette }) => ({
    footer: {
        position: 'relative',
        background: palette.background.footer,
        padding: `${spacing.unit * 10}px ${spacing.unit * 3}px ${spacing.unit * 12}px`,
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
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <SocialMediaButtons />
                <Copyright />
            </div>
        </div>
    );
};


Footer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Footer);
