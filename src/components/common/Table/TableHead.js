import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import size from 'lodash/size';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

import TableCell from './TableCell';
import { getFittingColSize } from './helpers';


const styles = {
    cellTypographyRoot: {
        fontWeight: 'bold',
        color: grey[600]
    }
};

const TableHead = props => {
    const { classes, dataMapping } = props;
    const colSize = getFittingColSize(size(dataMapping));

    return (
        <Grid container>
            {map(dataMapping, ({ label }, i) => (
                <TableCell
                    key={i}
                    xs={colSize}
                >
                    <Typography classes={{ root: classes.cellTypographyRoot }}>
                        {label}
                    </Typography>
                </TableCell>
            ))}
        </Grid>
    );
};

TableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    dataMapping: PropTypes.array
};

export default withStyles(styles)(TableHead);
