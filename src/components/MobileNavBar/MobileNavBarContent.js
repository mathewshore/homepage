import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MobileNavLogo from './MobileNavLogo';


const styles = theme => ({
    contentContainer: {
        height: (theme.spacing.unit * 6.5),
    },
    gridItemLinkContainer: {
        padding: theme.spacing.unit * 2,
    },
    logoLink: {
        color: theme.palette.text.header.light,

        '&:hover': {
            color: theme.palette.text.header.light,
        },
    },
    logoWrapper: {
        position: 'relative',
        marginLeft: 7,
    },
    logoLetter: {
        position: 'absolute',
        fontSize: 48,
        top: -10,
        fontWeight: 'bold',

        '&:first-of-type': {
            left: 21,
        },
        '&:last-of-type': {
            left: 48,
        },
    },
});


class MobileNavBarContent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.contentContainer}>
                <Grid container>
                    <Grid item xs={5} className={classes.gridItemLinkContainer}>
                        About Portfolio
                    </Grid>
                    <Grid item xs={2} className={classes.logoContainer}>
                        <a href="/#intro" className={classes.logoLink}>
                            <MobileNavLogo />
                            <span className={classes.logoWrapper}>
                                <span className={classes.logoLetter}>M</span>
                                <span className={classes.logoLetter}>R</span>
                            </span>
                        </a>
                    </Grid>
                    <Grid item xs={5} className={classes.gridItemLinkContainer}>
                        Skills Contact
                    </Grid>
                </Grid>
            </div>
        );
    }
}

MobileNavBarContent.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(MobileNavBarContent);
