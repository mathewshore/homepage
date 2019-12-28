import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, palette }) => ({
    container: {
        width: spacing.unit * 4,
        height: spacing.unit * 4,
        position: 'relative',
    },
    line: {
        background: '#fff',
        height: spacing.unit * 0.25,
        width: '100%',
        position: 'absolute',
        left: 0,
        transition: 'all 0.3s ease',
        '&.animated': {
            background: palette.primary.main
        },
        '&.first': {
            top: 7,
            '&.animated': {
                top: 15,
                transform: 'rotate(45deg)'
            }
        },
        '&.second': {
            top: 15,
            '&.animated': {
                width: spacing.unit * 0.25,
                left: '50%'
            }
        },
        '&.third': {
            top: 23,
            '&.animated': {
                top: 15,
                transform: 'rotate(-45deg)'
            }
        }
    }
});

const MenuIcon = props => {
    const { classes } = props;
    const firstLineClassNames = [classes.line, 'first'];
    const secondLineClassNames = [classes.line, 'second'];
    const thirdLineClassNames = [classes.line, 'third'];
    if (props.isOpen) {
        firstLineClassNames.push('animated');
        secondLineClassNames.push('animated');
        thirdLineClassNames.push('animated');
    }

    return (
        <div
            className={classes.container}
            onClick={props.onClick}
        >
            <div className={join(firstLineClassNames, ' ')} />
            <div className={join(secondLineClassNames, ' ')} />
            <div className={join(thirdLineClassNames, ' ')} />
        </div>
    );
};

MenuIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
};

export default withStyles(styles)(MenuIcon);
