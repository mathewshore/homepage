import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import green from '@material-ui/core/colors/green';
import MuiPaperIcon from '@material-ui/icons/Note';

import iconBaseStyles from './iconBaseStyles';


const styles = ({
    icon: {
        ...iconBaseStyles,
        transform: 'rotate(-90deg)',
        color: green[400]
    }
});

const PaperIcon = props => {
    const { classes } = props;

    const classNames = [classes.icon];
    if (props.selected) {
        classNames.push('selected');
    }
    if (props.withLargeIcon) {
        classNames.push('large');
    }

    return <MuiPaperIcon className={join(classNames, ' ')} />;
}; 

PaperIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    withLargeIcon: PropTypes.bool
};

export default withStyles(styles)(PaperIcon);
