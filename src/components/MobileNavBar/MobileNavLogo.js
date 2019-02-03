import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    hexagon: {
        position: 'absolute',
        bottom: 0,
        // width: 103,
        // height: 59.47,
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[20],

        '&:before': {
            content: '""',
            position: 'absolute',
            width: 0,
            // borderLeft: '51.5px solid transparent',
            // borderRight: '51.5px solid transparent',
            bottom: '100%',
            // borderBottom: `29.73px solid ${theme.palette.primary.main}`,
        },

        [theme.breakpoints.up('xs')]: {
            // ...theme.mobileNavLogo.margin.xs,
            width: 80,
            height: 46.19,

            '&:before': {
                borderLeft: '40px solid transparent',
                borderRight: '40px solid transparent',
                borderBottom: `23.09px solid ${theme.palette.primary.main}`,
            },
        },
        [theme.breakpoints.up('sm')]: {
            // ...theme.mobileNavLogo.margin.sm,
            width: 103,
            height: 59.47,

            '&:before': {
                borderLeft: '51.5px solid transparent',
                borderRight: '51.5px solid transparent',
                borderBottom: `29.73px solid ${theme.palette.primary.main}`,
            },
        },
    },
});

const MobileNavLogo = props => {
    const { classes } = props;
    return (
        <div className={classes.hexagon} />
    );
};

MobileNavLogo.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(MobileNavLogo);
