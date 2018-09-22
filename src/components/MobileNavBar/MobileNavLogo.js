import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    hexagon: {
        position: 'absolute',
        bottom: 0,
        width: 103,
        height: 59.47,
        backgroundColor: theme.palette.primary.main, // '#64C7CC', // add theme bgcolor
        marginLeft: 7, // 'auto', // '23.09px 0',
        boxShadow: theme.shadows[20],

        '&:before': {
            content: '""',
            position: 'absolute',
            width: 0,
            borderLeft: '51.5px solid transparent',
            borderRight: '51.5px solid transparent',
            bottom: '100%',
            borderBottom: `29.73px solid ${theme.palette.primary.main}`, // add theme bgcolor
        },
        // '&:after': {
        //     content: '""',
        //     position: 'absolute',
        //     width: 0,
        //     borderLeft: '40px solid transparent',
        //     borderRight: '40px solid transparent',
        //     top: '100%',
        //     borderTop: '23.09px solid #64C7CC' // add theme bgcolor
        // },
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
