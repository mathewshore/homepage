import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '../../common/Container';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('xs')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 2}px`
        },
        [breakpoints.up('md')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 8}px`
        },
        [breakpoints.up('lg')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 10}px`
        },
        '&.dense': {
            padding: `${spacing.unit * 1.5}px 0px`,
            [breakpoints.down('md')]: {
                padding: spacing.unit * 1.5
            },
            [breakpoints.down('sm')]: {
                padding: spacing.unit
            },
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
