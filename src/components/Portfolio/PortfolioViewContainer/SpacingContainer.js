import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '../../common/Container';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('xs')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 2}px`,
        },
        [breakpoints.up('md')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 8}px`
        },
        [breakpoints.up('lg')]: {
            padding: `${spacing.unit * 2.5}px ${spacing.unit * 10}px`
        },
        [breakpoints.up('xl')]: {
            padding: `${spacing.unit * 4}px ${spacing.unit * 10}px`
        }
    }
});

const SpacingContainer = props => {
    const { classes } = props;

    return (
        <Container className={classes.container}>
            {props.children}
        </Container>
    );
};

SpacingContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(SpacingContainer);
