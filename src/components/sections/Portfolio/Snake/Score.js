import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing }) => ({
    container: {
        border: '1px solid black'
    },
});

class Score extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                SCORE: 0000
            </div>
        );
    }
}

Score.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Score);
