import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import { purple, grey } from '@material-ui/core/colors';


const styles = theme => ({
    pictureSelectPanelWrapper: {
        // padding: `0 ${theme.spacing.unit * 2}px`,
    },
    panelImageButton: {
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        margin: '8px 0',

        transition: 'all 0.3s',
        border: 0,
        boxShadow: 'none',
        opacity: 1,

        '&:first-of-type': {
            marginTop: 0,
        },
        '&:last-of-type': {
            marginBottom: 0,
        },

        '&:hover': {
            // transform: 'scale(1.05)',
            boxShadow: `${grey[800]} 0px 1px 4px 1px`,
            opacity: 0.9,
        },
        '&.selected': {
            boxShadow: `${purple[900]} 0px 1px 4px 1px`,
        },
    },
    panelImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
    },
    panelImageBackdrop: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        '&:hover': {
            background: 'rgba(0, 0, 0, 0)',
        }
    },
});

class PictureSelectPanel extends Component {
    render() {
        const { classes, images, selectedImageIndex } = this.props;

        return (
            <div className={classes.pictureSelectPanelWrapper}>
                {_.map(images, ({ image, alt }, i) => (
                    <ButtonBase
                        focusRipple
                        className={classes.panelImageButton + (i === selectedImageIndex ? ' selected' : '')}
                        onClick={() => this.props.handlePictureSelect(i)}
                    >
                        <img className={classes.panelImage} src={image} alt={alt} />
                        {selectedImageIndex !== i && <span className={classes.panelImageBackdrop} />}
                    </ButtonBase>
                ))}
            </div>
        );
    }
}

PictureSelectPanel.propTypes = {
    classes: PropTypes.object,
    images: PropTypes.array,
    selectedImageIndex: PropTypes.number,
    handlePictureSelect: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(PictureSelectPanel);
