import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '../../common/Container';
import IntroText from './IntroText';
import IntroPortrait from './IntroPortrait';
import { SECTIONS, Z_INDEX } from '../../constants';


const styles = ({ palette, spacing, breakpoints }) => ({
    introSectionContainer: {
        background: palette.background.sections.intro,
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

        [breakpoints.up('xs')]: {
            flexDirection: 'column-reverse',
            marginTop: spacing.unit * -5,
            padding: `0 ${spacing.unit * 4}px`,
        },
        [breakpoints.up('sm')]: {
            padding: `0 ${spacing.unit * 6}px`,
        },
        [breakpoints.up('md')]: {
            flexDirection: 'initial',
            marginTop: 0,
            padding: `0 ${spacing.unit * 8}px`,
        },
        [breakpoints.up('lg')]: {
            padding: `0 ${spacing.unit * 10}px`,
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

export default withStyles(styles, { withTheme: true })(Intro);
