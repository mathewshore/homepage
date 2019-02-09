import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '../../common/Container';
import IntroText from './IntroText';
import IntroPortrait from './IntroPortrait';

import zIndex from '../../zIndex';
import { SECTIONS } from '../../constants';


const styles = theme => ({
    introSectionContainer: {
        background: theme.palette.background.sections.intro,
        height: '100vh',
    },
    introContainer: {
        height: '100%',
    },
    introContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column-reverse',
            marginTop: theme.spacing.unit * -5,
            padding: `0 ${theme.spacing.unit * 4}px`,
        },
        [theme.breakpoints.up('sm')]: {
            padding: `0 ${theme.spacing.unit * 6}px`,
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'initial',
            marginTop: 0,
            padding: `0 ${theme.spacing.unit * 8}px`,
        },
        [theme.breakpoints.up('lg')]: {
            padding: `0 ${theme.spacing.unit * 10}px`,
        },
    },

    introFixedContainer: {
        height: '100vh',
        width: '100%',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: zIndex.intro,
    },
});

class Intro extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div id={SECTIONS.INTRO}>
                <div className={classes.introSectionContainer} />
                <div className={classes.introFixedContainer}>
                    <Container className={classes.introContainer}>
                        <div className={classes.introContent}>
                            <IntroText />
                            <IntroPortrait />
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

Intro.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Intro);
