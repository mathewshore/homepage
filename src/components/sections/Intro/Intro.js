import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import TextHeader from '../../utils/TextHeader';

import introImg from '../../../images/intro_matias.jpg';
import zIndex from '../../zIndex';


const styles = theme => ({
    introSectionContainer: {
        background: theme.palette.background.sections.intro,
        height: '100vh',
    },
    introWrapper: {
        height: '100vh',
        width: '100%',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: zIndex.intro,
    },
    introImageContainer: {
        position: 'absolute',
        top: '20vh',
        right: '27vw',
        // width: 200,
        height: 370,
    },
    introImage: {
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // filter: 'grayscale(100%)',
        height: '100%',
        borderRadius: 120,
        // width: '100%',
    },
    introTextWrapper: {
        position: 'absolute',
        top: '34vh',
        left: '15vw',
        // width: theme.spacing.unit * 52,
    },
    introMainHeader: {
        color: theme.palette.text.header.dark,
    },
    introSubHeader: {
        // color: 'rgba(0, 0, 0, 0.74)',
    },
    dividerRoot: theme.sectionDivider,
});

class Intro extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div id='intro' className={classes.introSectionContainer} />
                <div className={classes.introWrapper}>
                    <div className={classes.introImageContainer}>
                        <img src={introImg} className={classes.introImage} alt="intro" />
                    </div>
                    <div className={classes.introTextWrapper}>
                        <div>
                            <TextHeader variant="display3" text="MATIAS RANTA" />
                            <TextHeader variant="display1" text="SOFTWARE DEVELOPER" />
                            <Divider classes={{ root: classes.dividerRoot }}/>
                        </div>
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
