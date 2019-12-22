import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        [breakpoints.up('md')]: {
            marginRight: spacing.unit * 5
        },
    }
});

const DescriptionContainer = props => {
    const { classes, className } = props;

    const classNames = [classes.container];
    if (className) {
        classNames.push(className);
    }

    return (
        <div className={join(classNames, ' ')}>
            {props.children}
        </div>
    );
};

DescriptionContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.any
};

export default withStyles(styles)(DescriptionContainer);
