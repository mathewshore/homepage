import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import CrossIcon from '@material-ui/icons/Close';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';


const styles = ({ spacing }) => ({
    icon: {
        fontSize: 36,
        // marginLeft: spacing.unit * -0.5,
        // marginRight: spacing.unit * 0.5,
        '&.x-icon': {
            color: red[500],
        },
        '&.o-icon': {
            color: blue[500],
        }
    }
});

const icons = {
    x: CrossIcon,
    o: CircleIcon
};

const PlayerIcon = props => {
    const { classes, iconType } = props;
    const Icon = get(icons, iconType);
    const classNames = [classes.icon];
    const extraClassName = iconType === 'x' ? 'x-icon' : 'o-icon';
    classNames.push(extraClassName);
    if (props.className) {
        classNames.push(props.className);
    }

    return <Icon classes={{ root: join(classNames, ' ') }} />;
};

PlayerIcon.defaultProps = {
    style: {
        fontSize: 24
    }
};

PlayerIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    iconType: PropTypes.oneOf(['x', 'o'])
};

export default withStyles(styles)(PlayerIcon);
