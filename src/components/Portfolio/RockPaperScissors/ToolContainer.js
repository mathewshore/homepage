import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%'
    }
});

const ToolContainer = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

ToolContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(ToolContainer);
