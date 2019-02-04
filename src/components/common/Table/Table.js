import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';

import withStyles from '@material-ui/core/styles/withStyles';
import MuiTable from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const styles = {
    tableCell: {
        textAlign: 'center'
    }
};

const Table = props => {
    const { classes } = props;

    return (
        <MuiTable>
            <TableHead>
                <TableRow>
                    {map(props.dataMapping, ({ label }, i) => (
                        <TableCell
                            key={i}
                            variant="head"
                            classes={{ root: classes.tableCell }}
                        >
                            {label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {map(props.data, (row, i) => (
                    <TableRow key={i}>
                        {map(props.dataMapping, ({ dataKey }, j) => (
                            <TableCell
                                key={j}
                                variant="body"
                                classes={{ root: classes.tableCell }}
                            >
                                {get(row, dataKey, '')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    );
};

Table.propTypes = {
    classes: PropTypes.object.isRequired,
    dataMapping: PropTypes.array,
    data: PropTypes.array.isRequired
};

export default withStyles(styles)(Table);
