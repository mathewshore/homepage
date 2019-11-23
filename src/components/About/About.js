import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Section from '../common/Section';
import { SECTIONS } from '../constants';


const styles = ({ palette }) => ({
    aboutSectionContainer: {
        background: palette.background.about
    }
});

class About extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Section id={SECTIONS.ABOUT} containerClassName={classes.aboutSectionContainer}>
                <Grid container spacing={24}>
                    <Grid item sm={12} md={6}>
                        <Typography variant='body2' align='justify'>
                            I have been working as a Front End Web Developer at a multicultural Bio-IT company
                            <a href='https://www.medisapiens.com' target='_blank' rel='noopener noreferrer'> MediSapiens </a>
                            since April 2016. At work, I develop software using the trendiest
                            technologies and finalize it with responsive pixel prefect design.

                            Alongside work, I am about to aquire my BBA from Haaga-Helia University of Applied
                            Sciences, department of Business IT. I have specialized in the Software Development,
                            wherein my main focus has revolved around Front End Development fortified with Back
                            End programming studies.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography variant='body2' align='justify'>
                            I am an open-minded teamworker with strong logical and analytical skills harnessed
                            with a competitive spirit. Whenever I start working on user interfaces, I ponder
                            thoroughly the workflow while constantly reminding myself of the aspect of user
                            experience.

                            My burning passion for programming has lead me to a point where when there are no
                            work nor school tasks, I tend challenge myself by developing new and cool features.
                            My longterm goal is to learn all the tricks of the craft and hone it to perfectness
                            bit by bit.
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(About);
