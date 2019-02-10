import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import ButtonBase from '@material-ui/core/ButtonBase';
import grey from '@material-ui/core/colors/grey';
import purple from '@material-ui/core/colors/purple';


const styles = theme => ({
    panelContainer: {
        background: grey[700]
    },
    imageButton: {
        maxWidth: theme.spacing.unit * 15,
        height: '80px',
        width: '100%',
        cursor: 'pointer',
        margin: theme.spacing.unit,

        transition: 'all 0.3s',
        border: 0,
        boxShadow: 'none',
        opacity: 1,

        '&:hover': {
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

class PreviewPanel extends Component {
    // ToDo: scroll to picture when next/previous is clicked in main viewer.

    render() {
        const { classes, images, selectedImageIndex } = this.props;

        return (
            <div className={classes.panelContainer}>
                {map(images, ({ src, alt }, i) => (
                    <ButtonBase
                        key={i}
                        focusRipple
                        className={classes.imageButton + (i === selectedImageIndex ? ' selected' : '')}
                        onClick={() => this.props.handlePictureSelect(i)}
                    >
                        <img className={classes.panelImage} src={src} alt={alt} />
                        {selectedImageIndex !== i && <span className={classes.panelImageBackdrop} />}
                    </ButtonBase>
                ))}
            </div>
        );
    }
}

PreviewPanel.propTypes = {
    classes: PropTypes.object,
    images: PropTypes.array,
    selectedImageIndex: PropTypes.number,
    handlePictureSelect: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(PreviewPanel);
