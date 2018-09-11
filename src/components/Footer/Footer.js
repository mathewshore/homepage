import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SocialMediaButtons from '../SocialMediaButtons';


const styles = theme => ({
    footer: {
        position: 'relative',
        background: theme.palette.background.footer,
        padding: '40px 20px',
        color: 'white',
        textAlign: 'center', 
    },
});

class Footer extends Component {
    static renderCopyrightText() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return `Copyright © ${currentYear} Matias Ranta. All rights reserved.`;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footer}>
                <div>{Footer.renderCopyrightText()}</div>
                <SocialMediaButtons />
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Footer);
