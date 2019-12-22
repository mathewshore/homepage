import React from 'react';
import PropTypes from 'prop-types';
import portraitImage from '../../images/intro_matias.png';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints, spacing }) => ({
    introImage: {
        borderRadius: '50%',

        [breakpoints.down('sm')]: {
            maxWidth: spacing.unit * 30
        },
        [breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
            marginTop: 20
        },
        [breakpoints.up('md')]: {
            width: '40%',
            marginLeft: '10%'
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
    // return (
    //     <div className={classes.portraitContainer}>
    //         <img
    //             src={portraitImage}
    //             className={join(imageClassNames, ' ')}
    //             alt="Matias Ranta"
    //         />
    //     </div>
    // );
};

IntroPortrait.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntroPortrait);
