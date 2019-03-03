import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';


const styles = ({ spacing }) => ({
    tableCell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: grey[800],
        borderBottom: `1px solid ${grey[300]}`,
        padding: `${spacing.unit * 2}px ${spacing.unit * 3}px`,
    }
});

const TableCell = props => {
    const { classes } = props;

    return (
        <Grid
            {...omit(props, ['classes'])}
            item
            className={classes.tableCell}
        />
    );
};

TableCell.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default withStyles(styles)(TableCell);
