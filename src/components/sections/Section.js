import React from 'react';
import PropTypes from 'prop-types';
import toUpper from 'lodash/toUpper';

import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextHeader from '../utils/TextHeader';
import Container from '../utils/Container';


const styles = theme => ({
    sectionWrapper: {
        position: 'relative',
        padding: `${theme.spacing.unit * 7}px 0`,
    },
    sectionPaper: {
        background: theme.palette.background.sections.paper,

        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing.unit * 4,
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 6,
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing.unit * 8,
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing.unit * 10,
        },
    },
    dividerRoot: theme.sectionDivider,
});

const Section = (props) => {
    const { classes, children, id, containerClassName } = props;
    const sectionWrapperClassName = `${classes.sectionWrapper} ${containerClassName}`;

    return (
        <div id={id} className={sectionWrapperClassName}>
            <Container>
                <Paper elevation={4} className={classes.sectionPaper}>
                    <TextHeader variant="display2" text={toUpper(id)} />
                    <Divider classes={{ root: classes.dividerRoot }} />
                    {children}
                </Paper>
            </Container>
        </div>
    );
};

Section.propTypes = {
    classes: PropTypes.object,
    containerClassName: PropTypes.string,
    children: PropTypes.element,
    id: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Section);
