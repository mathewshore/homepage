import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import brown from '@material-ui/core/colors/brown';
import MuiRockIcon from '@material-ui/icons/ThumbUp';


const styles = ({ breakpoints }) => ({
    icon: {
        color: brown[500],
        transition: 'all 0.4s ease',

        '&.selected': {
            fontSize: 32
        },
        '&.large': {
            fontSize: 48
        },
        [breakpoints.down('sm')]: {
            fontSize: 20,
            '&.selected': {
                fontSize: 21
            },
            '&.large': {
                fontSize: 36
            }
        }
    }
});

// todo: add HoC for selected and large classname styles.
const RockIcon = props => {
    const { classes } = props;

    const classNames = [classes.icon];
    if (props.selected) {
        classNames.push('selected');
    }
    if (props.withLargeIcon) {
        classNames.push('large');
    }

    return <MuiRockIcon className={join(classNames, ' ')} />;
};

RockIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    withLargeIcon: PropTypes.bool
};

export default withStyles(styles)(RockIcon);
