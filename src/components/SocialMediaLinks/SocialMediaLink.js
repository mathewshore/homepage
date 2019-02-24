import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';


const styles = ({ spacing }) => ({
    buttonRoot: {
       margin: `0px ${spacing.unit}px`,
       width: spacing.unit * 6,
       height: spacing.unit * 6
    },
});

const SocialMediaLink = (props) => {
    const { classes } = props;
    return (
        <Button
            component="a"
            variant="outlined"
            color="primary"
            target={props.target}
            href={props.href}
            classes={{ root: classes.buttonRoot }}
        >
            <SvgIcon style={props.iconStyle}>
                {props.children}
            </SvgIcon>
        </Button>
    );
};

SocialMediaLink.defaultProps = {
    target: "_blank" // Open new browser tab on link click.
};

SocialMediaLink.propTypes = {
    href: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    iconStyle: PropTypes.object
};

export default withStyles(styles)(SocialMediaLink);
