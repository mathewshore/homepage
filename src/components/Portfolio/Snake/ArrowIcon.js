import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import withStyles from '@material-ui/core/styles/withStyles';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowRightIcon from '@material-ui/icons/ArrowForward';
import ArrowLeftIcon from '@material-ui/icons/ArrowBack';


const styles = ({ palette, breakpoints }) => ({
    arrowIcon: {
        fill: palette.text.main,
        fontSize: 16,
        [breakpoints.up('xl')]: {
            fontSize: 20
        }
    }
});

const icons = {
    up: ArrowUpIcon,
    down: ArrowDownIcon,
    right: ArrowRightIcon,
    left: ArrowLeftIcon
};

const ArrowIcon = props => {
    const { classes } = props;
    const Icon = get(icons, props.direction);
    return Icon && <Icon className={classes.arrowIcon} />;
};

ArrowIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    direction: PropTypes.oneOf(['up', 'left', 'down', 'right'])
};

export default withStyles(styles)(ArrowIcon);
