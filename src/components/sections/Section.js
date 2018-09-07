import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Container } from 'reactstrap';
import { Typography, Divider, Paper } from '@material-ui/core';


const styles = theme => ({
    sectionWrapper: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2.5}px 0`,

        '&.about-section-wrapper': {
            padding: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 2.5}px`,
        },
        '&.contact-section-wrapper': {
            padding: `${theme.spacing.unit * 2.5}px 0 ${theme.spacing.unit * 5}px`,
        }
    },
    sectionPaper: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: theme.spacing.unit * 10,
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    dividerRoot: theme.sectionDivider,
});


const getSectionPaddingClassName = (id) => {
    if (id === 'about') {
        return ' about-section-wrapper';
    } else if (id === 'contact') {
        return ' contact-section-wrapper';
    }
    return '';
};

const Section = (props) => {
    const { classes, children, id, background } = props;
    const sectionWrapperClassName = classes.sectionWrapper + getSectionPaddingClassName(id);

    return (
        <div
            id={id}
            className={sectionWrapperClassName}
            style={{ background }}
        >
            <Container className={classes.container}>
                <Paper elevation={1} className={classes.sectionPaper}>
                    <Typography variant='display2'>
                        {id.toUpperCase()}
                    </Typography>
                    <Divider classes={{ root: classes.dividerRoot }} />
                    {children}
                </Paper>
            </Container>
        </div>
    );
};

Section.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.element,
    id: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Section);
