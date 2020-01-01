import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { GRID_WIDTH, CELL_SIZE, CELL_SIZE_MIN } from './constants';


const viewSize = (factor, unit) =>
    `calc(${GRID_WIDTH * factor}${unit} + ${GRID_WIDTH * 2}px)`;

const styles = ({ spacing, breakpoints }) => ({
    container: {
        background: 'rgba(236, 236, 236, 0.8)',
        position: 'absolute',
        width: viewSize(CELL_SIZE.XS.VALUE, CELL_SIZE.XS.UNIT),
        height: viewSize(CELL_SIZE.XS.VALUE, CELL_SIZE.XS.UNIT),
        minHeight: viewSize(CELL_SIZE_MIN.VALUE, CELL_SIZE_MIN.UNIT),
        minWidth: viewSize(CELL_SIZE_MIN.VALUE, CELL_SIZE_MIN.UNIT),

        [breakpoints.up('md')]: {
            width: viewSize(CELL_SIZE.MD.VALUE, CELL_SIZE.MD.UNIT),
            height: viewSize(CELL_SIZE.MD.VALUE, CELL_SIZE.MD.UNIT)
        },
    },
    contentContainer: {
        textAlign: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.unit * 3,
        height: `calc(100% - ${spacing.unit * 6}px)`,
        width: `calc(100% - ${spacing.unit * 6}px)`,
    }
});

const ViewContainer = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                {props.children}
            </div>
        </div>
    )
};

ViewContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(ViewContainer);
