import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '../common/Container';
import IntroText from './IntroText';
import IntroPortrait from './IntroPortrait';
import { SECTIONS, Z_INDEX } from '../constants';


const styles = ({ palette, spacing, breakpoints }) => ({
    introSectionContainer: {
        background: palette.background.intro,
        height: '100vh',
    },
    introContainer: {
        height: `calc(100% - ${spacing.unit * 3}px)`,
    },
    introContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

        [breakpoints.up('xs')]: {
            flexDirection: 'column-reverse',
            padding: `${spacing.unit * 3}px ${spacing.unit * 4}px 0`,
        },
        [breakpoints.up('sm')]: {
            padding: `${spacing.unit * 3}px ${spacing.unit * 6}px 0`,
        },
        [breakpoints.up('md')]: {
            flexDirection: 'initial',
            marginTop: 0,
            padding: `${spacing.unit * 3}px ${spacing.unit * 8}px 0`,
        },
        [breakpoints.up('lg')]: {
            padding: `${spacing.unit * 3}px ${spacing.unit * 10}px 0`,
        },
    },
    introFixedContainer: {
        height: '100vh',
        width: '100%',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: Z_INDEX.INTRO,
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

export default withStyles(styles)(Intro);
