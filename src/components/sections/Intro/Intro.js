import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

import introImg from '../../../bg_intro.jpg';
import zIndex from '../../zIndex';


const styles = theme => ({
    wrapper: {
        background: 'gray',
        height: '100vh',
    },
    introWrapper: {
        height: '100vh',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: 0,
    },
    introImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'grayscale(100%)',
        height: '100%',
        width: '100%',
        zIndex: zIndex.intro,
    },
    introTextWrapper: {
        position: 'absolute',
        top: '34vh',
        left: '15vw',
    },
    introMainHeader: {
        color: 'black',
    },
    introSubHeader: {
        color: 'rgba(0, 0, 0, 0.74)',
    },
});

class Intro extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div id='intro' className={classes.wrapper} />
                <div className={classes.introWrapper}>
                    <img src={introImg} className={classes.introImage} alt="logo" />
                    <div className={classes.introTextWrapper}>
                        <Typography variant='display3' className={classes.introMainHeader}>
                            MATIAS RANTA
                        </Typography>
                        
                        <Typography variant='display1' className={classes.introSubHeader}>
                            SOFTWARE DEVELOPER
                        </Typography>
                        <Divider />
                    </div>
                </div>
            </div>
        );
    }
}

Intro.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Intro);
