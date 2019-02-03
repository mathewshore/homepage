import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MobileNavLogo from './MobileNavLogo';


// const styles = theme => ({
//     contentContainer: {
//         height: (theme.spacing.unit * 6.5),
//         display: 'flex',
//     },
//     linkContainer: {
//         padding: theme.spacing.unit * 2,
//         width: `calc((100% - 80px) / 2)`,
//     },
//     logoLink: {
//         color: theme.palette.text.header.light,

//         '&:hover': {
//             color: theme.palette.text.header.light,
//         },
//     },
//     logoWrapper: {
//         position: 'relative',

//         [theme.breakpoints.up('xs')]: {
//             ...theme.mobileNavLogo.margin.xs,
//         },
//         [theme.breakpoints.up('sm')]: {
//             ...theme.mobileNavLogo.margin.sm,
//         },
//     },
//     logoLetter: {
//         position: 'absolute',
//         fontSize: 48,
//         top: -10,
//         fontWeight: 'bold',

//         '&:first-of-type': {
//             left: 21,
//         },
//         '&:last-of-type': {
//             left: 48,
//         },
//     },
// });


const styles = theme => ({
    contentContainer: {
        height: (theme.spacing.unit * 6.5),
        display: 'flex',
    },
    linkContainer: {
        padding: theme.spacing.unit * 2,
        width: `calc((100% - 80px) / 2)`,
        [theme.breakpoints.up('xs')]: {
            // ...theme.mobileNavLogo.margin.xs,
            width: `calc((100% - 80px) / 2)`,
        },
        [theme.breakpoints.up('sm')]: {
            // ...theme.mobileNavLogo.margin.sm,
            width: `calc((100% - 103px) / 2)`,
        },
    },
    logoLink: {
        color: theme.palette.text.header.light,

        '&:hover': {
            color: theme.palette.text.header.light,
        },

        [theme.breakpoints.up('xs')]: {
            width: 80,
        },
        [theme.breakpoints.up('sm')]: {
            width: 103,
        },
    },
    logoWrapper: {
        position: 'relative',

        // [theme.breakpoints.up('xs')]: {
        //     ...theme.mobileNavLogo.margin.xs,
        // },
        // [theme.breakpoints.up('sm')]: {
        //     ...theme.mobileNavLogo.margin.sm,
        // },
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
                <div className={classes.linkContainer}>
                    About Portfolio
                </div>
                <a href="/#intro" className={classes.logoLink}>
                    <MobileNavLogo />
                    <span className={classes.logoWrapper}>
                        <span className={classes.logoLetter}>M</span>
                        <span className={classes.logoLetter}>R</span>
                    </span>
                </a>
                <div className={classes.linkContainer}>
                    Skills Contact
                </div>
            </div>
            // <div className={classes.contentContainer}>
            //     <Grid container>
            //         <Grid item xs={4} sm={5} className={classes.gridItemLinkContainer}>
            //             About Portfolio
            //         </Grid>
            //         <Grid item xs={4} sm={2} className={classes.logoContainer}>
            //             <a href="/#intro" className={classes.logoLink}>
            //                 <MobileNavLogo />
            //                 <span className={classes.logoWrapper}>
            //                     <span className={classes.logoLetter}>M</span>
            //                     <span className={classes.logoLetter}>R</span>
            //                 </span>
            //             </a>
            //         </Grid>
            //         <Grid item xs={4} sm={5} className={classes.gridItemLinkContainer}>
            //             Skills Contact
            //         </Grid>
            //     </Grid>
            // </div>
        );
    }
}

MobileNavBarContent.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(MobileNavBarContent);
