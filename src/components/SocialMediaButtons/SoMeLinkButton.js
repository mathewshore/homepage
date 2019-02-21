import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
       margin: `0px ${theme.spacing.unit}px`,
       width: theme.spacing.unit * 6,
       height: theme.spacing.unit * 6
    },
});

const SoMeLinkButton = (props) => {
    const { classes } = props;
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
            >
                <SvgIcon style={props.svgIconStyle}>
                    {props.children}
                </SvgIcon>
            </Button>
        </a>
    );
};

SoMeLinkButton.propTypes = {
    url: PropTypes.string,
    classes: PropTypes.object,
    children: PropTypes.element,
    svgIconStyle: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(SoMeLinkButton);
