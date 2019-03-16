import React from 'react';

import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import XIcon from '@material-ui/icons/Close';
import OIcon from '@material-ui/icons/PanoramaFishEye';


const styles = {
    xIcon: {
        color: red[500],
    },
    oIcon: {
        color: blue[500],
    }
};

const PlayerIcon = props => {
    const { classes, iconType, style } = props;
    const Icon = iconType === 'x' ? XIcon : OIcon;
    const iconClassName = iconType === 'x' ? classes.xIcon : classes.oIcon;
    return <Icon classes={{ root: iconClassName }} style={style} />;
};

PlayerIcon.defaultProps = {
    style: {
        fontSize: 24
    }
};

PlayerIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    iconType: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default withStyles(styles)(PlayerIcon);
