import React, { Component } from 'react';
import PropTypes from 'prop-types';
import portraitImage from '../../../images/intro_matias.png';
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
    state = { portraitShown: false };

    componentDidMount = () => {
        setTimeout(() => this.setState({ portraitShown: true }), 0);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.portraitContainer}>
                <img
                    src={portraitImage}
                    className={`${classes.introImage}${this.state.portraitShown ? ' show' : ''}`}
                    alt="Portrait of Matias Ranta"
                />
            </div>
        );
    }
}

IntroPortrait.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntroPortrait);
