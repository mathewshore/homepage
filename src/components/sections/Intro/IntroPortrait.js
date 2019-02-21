import React, { Component } from 'react';
import PropTypes from 'prop-types';
import introImg from '../../../images/intro_matias.png';
import withStyles from '@material-ui/core/styles/withStyles';

const IMAGE_ROTATION_COUNT = 4;

const styles = theme => ({
    portraitContainer: {
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto'
        },
    },
    introImage: {
        borderRadius: 500,
        transition: 'all 3s ease',
        width: 0,
        transform: 'rotate(0deg)',
        '&.show': {
            width: '100%',
            transform: `rotate(${360 * IMAGE_ROTATION_COUNT}deg)`,
        },

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

class IntroPortrait extends Component {
    state = { imageShown: false };

    componentDidMount = () => {
        setTimeout(() => this.setState({ imageShown: true }), 0);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.portraitContainer}>
                <img
                    src={introImg}
                    className={`${classes.introImage}${this.state.imageShown ? ' show' : ''}`}
                    alt="Portrait of Matias Ranta"
                />
            </div>
        );
    }
}

IntroPortrait.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(IntroPortrait);
