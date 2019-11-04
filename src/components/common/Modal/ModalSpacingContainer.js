import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        display: 'inherit',
        alignItems: 'inherit',
        width: 'inherit',
        padding: `${spacing.unit * 3}px ${spacing.unit * 10}px`,
        [breakpoints.down('md')]: {
            padding: `${spacing.unit * 2}px ${spacing.unit * 4}px`,
        },
        [breakpoints.down('sm')]: {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 3}px`,
        },
        '&.dense': {
            padding: `${spacing.unit * 1.5}px ${spacing.unit * 10}px`,
            [breakpoints.down('md')]: {
                padding: `${spacing.unit * 1.5}px ${spacing.unit * 4}px`,
            },
            [breakpoints.down('sm')]: {
                padding: `${spacing.unit}px ${spacing.unit * 3}px`,
            },
        }
    }
});

const ModalSpacingContainer = props => {
    const { classes, verticalSpacing } = props;
    const classNames = [classes.container];
    if (verticalSpacing === 'dense') {
        classNames.push(verticalSpacing);
    }

    return (
        <div className={join(classNames, ' ')}>
            {props.children}
        </div>
    );
};

ModalSpacingContainer.defaultProps = {
    verticalSpacing: 'normal'
};

ModalSpacingContainer.propTypes = {
    children: PropTypes.any,
    verticalSpacing: PropTypes.oneOf(['normal', 'dense'])
};

export default withStyles(styles)(ModalSpacingContainer);
