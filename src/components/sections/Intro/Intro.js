import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';
import TextHeader from '../../utils/TextHeader';
import Container from '../../utils/Container';

import introImg from '../../../images/intro_matias.png';
import zIndex from '../../zIndex';


const styles = theme => ({
    introSectionContainer: {
        background: theme.palette.background.sections.intro,
        height: '100vh',
    },
    gridContainer: {
        padding: theme.spacing.unit * 10, // same lg padding as in section paper
        // ToDo: combine gridContainer & section paper paddings
        // ToDo: adjust padding to media screens
    },
    gridItem: {
        textAlign: 'center',

        [theme.breakpoints.up('md')]: {
            textAlign: 'initial',
        },
    },
    introWrapper: {
        height: '100vh',
        width: '100%',
        top: 66, // navbar height
        left: 0,
        position: 'fixed',
        zIndex: zIndex.intro,
        // ToDo: set top: 0 when navbar is bottom for sm> screens
    },
    introTextWrapper: {
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            top: `calc(50% + ${theme.spacing.unit * 3}px)`,
            transform: 'translateY(-50%)',
        },
        // ToDo: adjust position for sm> screens when nav is bottom
    },
    introTextPhrase: {
        fontSize: 22,
    },
    introImageWrapper: {
        // ToDo: adjust position for sm> screens when nav is bottom
        [theme.breakpoints.up('md')]: {
            top: `calc(50% - ${theme.spacing.unit * 17}px)`,
            transform: 'translateY(-50%)',
            position: 'relative',
        },
    },
    introImage: {
        height: '100%',
        width: '100%',
        borderRadius: 500,
        float: 'none',

        [theme.breakpoints.up('xs')]: {
            maxWidth: 240,
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: 280,
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 320,
            float: 'right',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 360,
        },
    },
    dividerRoot: {
        ...theme.sectionDivider,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class Intro extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div id='intro' className={classes.introSectionContainer} />
                <div className={classes.introWrapper}>
                    <Container>
                        <Grid
                            container
                            spacing={40}
                            className={classes.gridContainer}
                            // ToDo: for sm> set direction="column-reverse"
                        >
                            <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                                <div className={classes.introTextWrapper}>
                                    <TextHeader variant="display3" text="MATIAS RANTA" />
                                    <TextHeader variant="display1" text="SOFTWARE DEVELOPER" />
                                    <Divider classes={{ root: classes.dividerRoot }}/>
                                    <Typography variant="display1" classes={{ root: classes.introTextPhrase }}>
                                        PIXEL PERFECTIONIST & DOG LOVER
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                                <div className={classes.introImageWrapper}>
                                    <img src={introImg} className={classes.introImage} alt="intro" />
                                </div>
                            </Grid>
                        </Grid>
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
