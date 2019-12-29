import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints }) => ({
    firstLetter: {
        '&.display3': {
            fontSize: 44
        },
        '&.display2': {
            fontSize: 40
        },
        '&.display1': {
            fontSize: 32
        },
        '&.subheading': {
            fontSize: 16
        },
        [breakpoints.down('sm')]: {
            '&.display3': {
                fontSize: 40
            },
            '&.display2': {
                fontSize: 36
            },
            '&.display1': {
                fontSize: 28
            },
            '&.subheading': {
                fontSize: 18
            }
        },
        [breakpoints.up('xl')]: {
            '&.display3': {
                fontSize: 48
            },
            '&.display2': {
                fontSize: 48
            },
            '&.display1': {
                fontSize: 36
            },
            '&.subheading': {
                fontSize: 24
            }
        }
    }
});

const FirstLetter = props => {
    const { classes } = props;
    const classNames = [classes.firstLetter];
    if (props.variant) {
        classNames.push(props.variant);
    }

    return (
        <span className={join(classNames, ' ')}>
            {props.children}
        </span>
    )
};

FirstLetter.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
    variant: PropTypes.string
};

export default withStyles(styles)(FirstLetter);
