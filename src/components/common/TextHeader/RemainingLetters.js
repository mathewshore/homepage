import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints }) => ({
    firstLetter: {
        '&.display3': {
            fontSize: 36
        },
        '&.display2': {
            fontSize: 32
        },
        '&.display1': {
            fontSize: 28
        },
        '&.subheading': {
            fontSize: 14
        },
        [breakpoints.down('sm')]: {
            '&.display3': {
                fontSize: 32
            },
            '&.display2': {
                fontSize: 28
            },
            '&.display1': {
                fontSize: 24
            },
            '&.subheading': {
                fontSize: 12
            }
        },
        [breakpoints.up('xl')]: {
            '&.display3': {
                fontSize: 40
            },
            '&.display2': {
                fontSize: 40
            },
            '&.display1': {
                fontSize: 28
            },
            '&.subheading': {
                fontSize: 20
            }
        }
    },
});

const RemainingLetters = props => {
    const { classes } = props;
    const classNames = [classes.firstLetter];
    if (props.variant) {
        classNames.push(props.variant);
    }

    return (
        <span className={join(classNames, ' ')}>
            {props.children}
        </span>
    );
};

RemainingLetters.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
    variant: PropTypes.string
};

export default withStyles(styles)(RemainingLetters);
