import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import keys from 'lodash/keys';

import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


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
                        {map(StatsTable.headers, header => (
                            <TableCell key={header} classes={{ root: classes.tableCell }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {map(keys(stats), key => (
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
