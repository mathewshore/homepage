import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import get from 'lodash/get';
import size from 'lodash/size';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TableCell from './TableCell';
import { getFittingColSize } from './helpers';


const TableBody = props => {
    const { dataMapping } = props;
    const colSize = getFittingColSize(size(dataMapping));

    return map(props.data, (row, i) => (
        <Grid container key={i}>
            {map(dataMapping, ({ dataKey }, j) => (
                <TableCell
                    key={j}
                    xs={colSize}
                >
                    <Typography variant="body1">
                        {get(row, dataKey, '')}
                    </Typography>
                </TableCell>
            ))}
        </Grid>
    ));
};

TableBody.propTypes = {
    dataMapping: PropTypes.array,
    data: PropTypes.array.isRequired
};

export default TableBody;
