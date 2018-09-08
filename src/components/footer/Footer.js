import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


const styles = theme => ({
    footer: {
        position: 'relative',
        background: theme.palette.background.footer,
        padding: '40px 20px',
        color: 'white',
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
            <Grid container className={classes.footer}>
                <Grid item xs style={{ textAlign: 'center' }}>
                    {Footer.renderCopyrightText()}
                </Grid>
            </Grid>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Footer);
