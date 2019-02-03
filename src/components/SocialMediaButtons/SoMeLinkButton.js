import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
       display: 'block',
       margin: `0px ${theme.spacing.unit}px`,
       width: theme.spacing.unit * 6,
       height: theme.spacing.unit * 6
    },
});

const SoMeLinkButton = (props) => {
    const { url, classes, children, svgIconStyle } = props;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <Button
                // mini
                variant="outlined"
                color="primary"
                className={classes.button}
            >
                <SvgIcon style={svgIconStyle}>
                    {children}
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
