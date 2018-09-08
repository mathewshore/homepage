import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider, Paper } from '@material-ui/core';
import { Container } from 'reactstrap';
import TextHeader from '../utils/TextHeader';


const styles = theme => ({
    sectionWrapper: {
        position: 'relative',
        padding: `${theme.spacing.unit * 7}px 0`,
    },
    sectionPaper: {
        background: theme.palette.background.sections.paper,
        padding: theme.spacing.unit * 10,
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    dividerRoot: theme.sectionDivider,
});


const Section = (props) => {
    const { classes, children, id, containerClassName } = props;
    const sectionWrapperClassName = `${classes.sectionWrapper} ${containerClassName}`;

    return (
        <div id={id} className={sectionWrapperClassName}>
            <Container className={classes.container}>
                <Paper elevation={4} className={classes.sectionPaper}>
                    <TextHeader variant="display2" text={_.toUpper(id)} />
                    {/* <Typography variant='display2'>
                        {_.toUpper(id)}
                    </Typography> */}
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
