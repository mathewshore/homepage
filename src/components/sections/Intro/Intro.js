import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid } from '@material-ui/core';
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
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 2}px`,
    },
    introWrapper: {
        height: '100vh',
        width: '100%',
        top: 66, // navbar height
        left: 0,
        position: 'fixed',
        zIndex: zIndex.intro,
    },
    introImageContainer: {
        position: 'absolute',
        top: '20vh',
        right: '27vw',
        height: 370,
    },
    introImage: {
        height: '100%',
        width: '100%',
        borderRadius: 500,

        // ToDo: define introImg media screen max-widths here.
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
                    <Container>
                        <Grid container spacing={24} className={classes.gridContainer}>
                            <Grid item xs={6}>
                                <div>
                                    <TextHeader variant="display3" text="MATIAS RANTA" />
                                    <TextHeader variant="display1" text="SOFTWARE DEVELOPER" />
                                    <Divider classes={{ root: classes.dividerRoot }}/>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>
                                    <img src={introImg} className={classes.introImage} alt="intro" />
                                </div>
                            </Grid>
                        </Grid>
                        {/* <div className={classes.introImageContainer}>
                            <img src={introImg} className={classes.introImage} alt="intro" />
                        </div>
                        <div className={classes.introTextWrapper}>
                            <div>
                                <TextHeader variant="display3" text="MATIAS RANTA" />
                                <TextHeader variant="display1" text="SOFTWARE DEVELOPER" />
                                <Divider classes={{ root: classes.dividerRoot }}/>
                            </div>
                        </div> */}
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
