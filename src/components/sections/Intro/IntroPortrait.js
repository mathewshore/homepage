import React, { Component } from 'react';
import PropTypes from 'prop-types';
import portraitImage from '../../../images/intro_matias.png';
import withStyles from '@material-ui/core/styles/withStyles';

const IMAGE_ROTATION_COUNT = 4;

const styles = ({ breakpoints, spacing }) => ({
    portraitContainer: {
        [breakpoints.up('md')]: {
            marginLeft: 'auto'
        },
    },
    introImage: {
        borderRadius: '50%',
        transition: 'all 3s ease',
        width: 0,
        transform: 'rotate(0deg)',
        '&.show': {
            width: '100%',
            transform: `rotate(${360 * IMAGE_ROTATION_COUNT}deg)`,
        },

        [breakpoints.up('xs')]: {
            maxWidth: spacing.unit * 30, // 240px
        },
        [breakpoints.up('sm')]: {
            maxWidth: spacing.unit * 35, // 280px
        },
        [breakpoints.up('md')]: {
            maxWidth: spacing.unit * 40 // 320px
        },
        [breakpoints.up('lg')]: {
            maxWidth: spacing.unit * 45 // 360px
        },
    }
});

class IntroPortrait extends Component {
    state = {
        portraitShown: false
    };

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
