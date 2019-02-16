import React from 'react';
import PropTypes from 'prop-types';
import introImg from '../../../images/intro_matias.png';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    portraitContainer: {
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto'
        },
    },
    introImage: {
        width: '100%',
        borderRadius: 500,

        [theme.breakpoints.up('xs')]: {
            maxWidth: 240,
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: 280,
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 320,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 360,
        },
    }
});

const IntroPortrait = props => {
    const { classes } = props;
    return (
        <div className={classes.portraitContainer}>
            <img src={introImg} className={classes.introImage} alt="intro" />
        </div>
    );
};

IntroPortrait.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(IntroPortrait);
