import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { SvgIcon, Button } from '@material-ui/core';


const styles = {
    button: {
       display: 'block',
       margin: '8px 0',
    },
};

const SoMeLinkButton = (props) => {
    const { url, classes, children, svgIconStyle } = props;
    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <Button
                mini
                variant='fab'
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
