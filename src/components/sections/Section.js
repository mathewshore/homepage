import React from 'react';
import PropTypes from 'prop-types';
import toUpper from 'lodash/toUpper';

import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextHeader from '../common/TextHeader';
import Container from '../common/Container';


const styles = ({ spacing, palette, breakpoints }) => ({
    sectionWrapper: {
        position: 'relative',
        padding: `0 0 ${spacing.unit * 7}px`,
        '&#about': {
            paddingTop: spacing.unit * 7
        }
    },
    sectionPaper: {
        background: palette.background.sections.paper,

        [breakpoints.up('xs')]: {
            padding: `${spacing.unit * 6}px ${spacing.unit * 4}px`,
        },
        [breakpoints.up('sm')]: {
            padding: spacing.unit * 6,
        },
        [breakpoints.up('md')]: {
            padding: spacing.unit * 8,
        },
        [breakpoints.up('lg')]: {
            padding: spacing.unit * 10,
        },
    }
});

const Section = (props) => {
    const { classes, children, id, containerClassName } = props;

    return (
        <div id={id} className={`${classes.sectionWrapper} ${containerClassName}`}>
            <Container>
                <Paper elevation={4} className={classes.sectionPaper}>
                    <TextHeader variant="display2" text={toUpper(id)} />
                    <Divider />
                    {children}
                </Paper>
            </Container>
        </div>
    );
};

Section.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    containerClassName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default withStyles(styles)(Section);
