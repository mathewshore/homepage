import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import TableHead from './TableHead';
import TableBody from './TableBody';


const styles = ({ spacing }) => ({
    tableContainer: {
        marginBottom: spacing.unit * 2
    }
});

const Table = props => {
    const { classes } = props;

    return (
        <div className={classes.tableContainer}>
            <TableHead dataMapping={props.dataMapping} />
            <TableBody data={props.data} dataMapping={props.dataMapping} />
        </div>
    );
};

Table.propTypes = {
    classes: PropTypes.object.isRequired,
    dataMapping: PropTypes.array,
    data: PropTypes.array.isRequired
};

export default withStyles(styles)(Table);
