import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints }) => ({
    container: {
        textAlign: 'center',
        [breakpoints.up('xs')]: {
            minWidth: '32%'
        },
        [breakpoints.up('md')]: {
            minWidth: '28%'
        }
    }
});

const PlayerBlock = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
};

PlayerBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default withStyles(styles)(PlayerBlock);
