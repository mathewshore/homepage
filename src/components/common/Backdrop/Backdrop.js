import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Z_INDEX } from '../../constants';


const styles = ({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: Z_INDEX.BACKDROP
    }
});

const Backdrop = props => {
    const { classes } = props;
    return (
        <div
            className={classes.backdrop}
            onClick={this.onMenuToggleClick}
        />
    );
};

Backdrop.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Backdrop);
