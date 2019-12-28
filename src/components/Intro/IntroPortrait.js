import React from 'react';
import PropTypes from 'prop-types';
import portraitImage from '../../images/intro_matias.png';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints, spacing }) => ({
    introImage: {
        borderRadius: '50%',

        [breakpoints.up('xs')]: {
            width: spacing.unit * 28,
            marginTop: '8vh', // spacing.unit * 10,
            marginLeft: 0
        },
        [breakpoints.up('md')]: {
            width: '40%',
            marginLeft: '10%',
            marginTop: 0
        },
        [breakpoints.up('lg')]: {
            width: '35%',
            marginLeft: '10%'
        },
        [breakpoints.up('xl')]: {
            width: '35%',
            marginLeft: '15%'
        }
    }
});

const IntroPortrait = props => {
    const { classes } = props;

    return (
        <img
            src={portraitImage}
            className={classes.introImage}
            alt="Matias Ranta"
        />
    );
};

IntroPortrait.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntroPortrait);
