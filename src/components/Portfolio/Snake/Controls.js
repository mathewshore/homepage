import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import KeyboardBlock from './KeyboardBlock';
import ArrowIcon from './ArrowIcon';
import MenuHeader from './MenuHeader';


const styles = ({ spacing, breakpoints }) => ({
    keysContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: `${spacing.unit * 3}px 0px`
    },
    separatorTypography: {
        fontSize: 16,
        [breakpoints.up('xs')]: {
            margin: `0px ${spacing.unit * 2}px`
        },
        [breakpoints.up('sm')]: {
            margin: `0px ${spacing.unit * 3}px`
        },
        [breakpoints.up('xl')]: {
            margin: `0px ${spacing.unit * 4.5}px`
        }
    }
});

const getArrowKeys = () =>
    map(['up', 'left', 'down', 'right'], direction => (
        <ArrowIcon direction={direction} />
    ));

const Controls = props => {
    const { classes } = props;
    return (
        <Fragment>
            <MenuHeader>Controls</MenuHeader>
            <div className={classes.keysContainer}>
                <KeyboardBlock keys={['W', 'A', 'S', 'D']} />
                <Typography
                    variant="caption"
                    className={classes.separatorTypography}
                >
                    OR
                </Typography>
                <KeyboardBlock keys={getArrowKeys()} />
            </div>
        </Fragment>
    );
};

Controls.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Controls);
