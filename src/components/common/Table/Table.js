import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';
import size from 'lodash/size';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';


const styles = ({ spacing }) => ({
    tableContainer: {
        margin: `${spacing.unit * 2}px 0`
    },
    tableCell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: grey[800],
        borderBottom: `1px solid ${grey[300]}`,
        padding: `
            ${spacing.unit * 2}px
            ${spacing.unit * 3}px
        `,
    }
});

const Table = props => {
    const { classes } = props;
    const colSize = 12 / size(props.dataMapping);

    return (
        <div className={classes.tableContainer}>
            <Grid container>
                {map(props.dataMapping, ({ label }, i) => (
                    <Grid
                        item
                        key={i}
                        xs={colSize}
                        className={classes.tableCell}
                    >
                        {label}
                    </Grid>
                ))}
            </Grid>
            {map(props.data, (row, i) => (
                <Grid container key={i}>
                    {map(props.dataMapping, ({ dataKey }, j) => (
                        <Grid
                            item
                            key={j}
                            xs={colSize}
                            className={classes.tableCell}
                        >
                            {get(row, dataKey, '')}
                        </Grid>
                    ))}
                </Grid>
            ))}
        </div>
    );
};

Table.propTypes = {
    classes: PropTypes.object.isRequired,
    dataMapping: PropTypes.array,
    data: PropTypes.array.isRequired
};

export default withStyles(styles)(Table);
