import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Section from '../common/Section';
import GridContainer from '../common/GridContainer';
import { SECTIONS } from '../constants';


const styles = ({ palette }) => ({
    aboutSectionContainer: {
        background: palette.background.about
    }
});

const About = props => {
    const { classes } = props;

    return (
        <Section
            id={SECTIONS.ABOUT}
            containerClassName={classes.aboutSectionContainer}
        >
            <GridContainer>
                <Grid item sm={12} md={6}>
                    <Typography align='justify'>
                        I'm a passionate frontend oriented software developer
                        with eye for user interface design and focus on intuitive
                        interaction. I'm a BBA graduate specialized in software
                        development tempered with over three years of relevant work
                        experience in the IT industry in multicultural environment.
                        I've worked with clients sizing from small to giant as a
                        UI developer producing customized analytical tools for
                        various purposes.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography align='justify'>
                        Project wise, I'm used to the development cycles of SCRUM
                        and task management with Kanban board. I've developed
                        different kind of web applications participating all the way from
                        the design stages to full release of solutions. I'm used
                        to coding SPA and hybrid architectures plugged in with
                        REST APIs written with tools like React and Redux or Unstated.
                        I like my code when it's tested, easy to read, easility
                        reusable and the result is visually pleasing.
                    </Typography>
                </Grid>
            </GridContainer>
        </Section>
    );
};

About.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(About);
