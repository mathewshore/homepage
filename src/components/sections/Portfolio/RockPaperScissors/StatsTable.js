import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';


const styles = theme => ({
    table: {
        // maxWidth: 400,
        margin: 'auto',
    },
    tableCell: {
        textAlign: 'center',
        // width: `${(100 / 3)}%`,
    },
});

class StatsTable extends Component {
    static headers = ['Victories', 'Draws', 'Defeats'];

    render() {
        const { classes, stats } = this.props;

        return (
            <Table classes={{ root: classes.table }}>
                <TableHead>
                    <TableRow>
                        {StatsTable.headers.map((header) => (
                            <TableCell key={header} classes={{ root: classes.tableCell }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {Object.keys(stats).map((key) => (
                            <TableCell key={key} classes={{ root: classes.tableCell }}>
                                {stats[key]}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

StatsTable.propTypes = {
    classes: PropTypes.object,
    stats: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(StatsTable);
