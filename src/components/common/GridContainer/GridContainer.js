import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';


const getGridSpacing = width => {
    switch (width) {
        case 'xl':
            return 40;
        default:
            return 24;
    }
};

const GridContainer = props => {
    return (
        <Grid
            container
            spacing={getGridSpacing(props.width)}
        >
            {props.children}
        </Grid>
    )
};

GridContainer.propTypes = {
    width: PropTypes.string,
    childern: PropTypes.element
};

export default withWidth()(GridContainer);
