import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CodeIcon from '@material-ui/icons/Code';
import DesignIcon from '@material-ui/icons/Wallpaper';

import Section from '../common/Section';
import { SECTIONS } from '../constants';
import * as skills from './skill_data';
import SkillList from './SkillList';


const styles = ({ palette }) => ({
    sectionContainer: {
        background: palette.background.skills,
    }
});

const Skills = props => {
    const { classes } = props;

    return (
        <Section
            id={SECTIONS.SKILLS}
            containerClassName={classes.sectionContainer}
        >
            <Grid container spacing={24}>
                <Grid item md={6} xs={12}>
                    <SkillList
                        title="Programming"
                        ListIcon={CodeIcon}
                        skills={skills.programming}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SkillList
                        ListIcon={DesignIcon}
                        title="Design & Prototyping"
                        skills={skills.design}
                    />
                </Grid>
                {/* <Grid item md={4} xs={12}>
                    <SkillList
                        ListIcon={OSIcon}
                        title="Operating systems"
                        skills={skills.operatingSystems}
                    />
                </Grid> */}
            </Grid>
        </Section>
    );
};

Skills.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Skills);
