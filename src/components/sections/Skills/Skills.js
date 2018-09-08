import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Section from '../Section';


const styles = theme => ({
    skillsSectionContainer: {
        background: theme.palette.background.sections.skills,
    },
    card: {
       maxWidth: 345,
    },
});

class Skills extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Section id='skills' containerClassName={classes.skillsSectionContainer}>
                <Grid container>
                    <Grid item md xs={12}>
                        <Typography variant='display1'>
                            Programming
                        </Typography>
                        <Typography variant='body1'>
                            Front End
                        </Typography>
                    </Grid>
                    <Grid item md xs={12}>
                        <Typography variant='display1'>
                            Design
                        </Typography>
                        <Typography variant='body1'>
                            Material Design
                        </Typography>
                        <Typography variant='body1'>
                            Adobe Illustrator
                        </Typography>
                    </Grid>
                    <Grid item md xs={12}>
                        <Typography variant='display1'>
                            Miscellaneous 
                        </Typography>
                        <Typography variant='body1'>
                            Prototyping
                        </Typography>
                        <Typography variant='body1'>
                            Lean
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
        );
    }
}

Skills.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Skills);
