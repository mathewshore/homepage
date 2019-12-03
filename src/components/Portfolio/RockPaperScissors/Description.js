import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import DescriptionContainer from '../../common/DescriptionContainer';
import Table from '../../common/Table';

import { RESULT_TYPES } from './constants';


const styles = ({ spacing }) => ({
    container: {
        // todo: adjust for mediascreens
        width: '30%'
    },
    bodyTypography: {
        marginBottom: spacing.unit * 3
    },
    statsTypography: {
        marginBottom: spacing.unit * 2,
        textAlign: 'center'
    }
});

const dataMapping = [
    {
        dataKey: RESULT_TYPES.WIN,
        label: 'Victories'
    },
    {
        dataKey: RESULT_TYPES.DRAW,
        label: 'Draws'
    },
    {
        dataKey: RESULT_TYPES.LOOSE,
        label: 'Defeats'
    }
];

const Description = props => {
    const { classes } = props;

    return (
        <DescriptionContainer className={classes.container}>
            <Typography
                variant="body2"
                className={classes.bodyTypography}
            >
                Wanted to play around with animations combined with some simple
                user interactions enabled by React. My 7th sense told be me to
                tackle this issue in a playful approach and I ended up creating
                the old classic – Rock Paper Scissors. Do you have what it
                takes to beat the opponent before it takes over the world?!
            </Typography>
            <Typography
                variant="title"
                className={classes.statsTypography}
            >
                Your stats
            </Typography>
            <Table
                dataMapping={dataMapping}
                data={[props.stats]}
            />
        </DescriptionContainer>
    );
};

Description.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Description);
