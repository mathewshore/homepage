import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ChevronLeft as LeftArrowIcon, ChevronRight as RightArrowIcon } from '@material-ui/icons';
import { purple, grey } from '@material-ui/core/colors';


const imageToggler = {
    position: 'absolute',
    top: 32,
    width: '10%',
    height: 'calc(100% - 32px)',
    textAlign: 'center',
    cursor: 'pointer',

    transition: 'all 0.3s, visibility 0s linear, opacity 0.3s linear',
    background: 'rgba(0, 0, 0, 0.2)',
    color: 'rgba(0, 0, 0, 0.5)',
    visibility: 'visible',
    opacity: 1,

    '&:hover': {
        background: 'rgba(0, 0, 0, 0.4)',
        color: 'white',
    },
    '&.hidden': {
        visibility: 'hidden',
        opacity: 0,
    }
};

const styles = () => ({
    viewerWarpper: {
        height: '100%',
        background: 'white',
    },
    selectedImageWrapper: {
        textAlign: 'center',
        height: '75vh',
        background: grey[700],
        position: 'relative',
    },
    selectedImageTitleBar: {
        // position: 'absolute',
        height: 32,
        width: '100%',
        padding: 4,
        background: 'rgba(42, 42, 42, 0.7)',
        textAlign: 'center',
        color: 'white',
    },
    selectedImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100% - 32px)',
        // width: '100%',
    },
    previousImageToggler: {
        ...imageToggler,
        left: 0,
    },
    nextImageToggler: {
        ...imageToggler,
        right: 0,
    },
    togglerArrowIcon: {
        top: 'calc(50% - 32px)',
        position: 'relative',
        fontSize: 'calc(3vw + 3vh)',
    },
    imageSelectPanel: {
        marginBottom: 16,
    },
    panelImageWrapper: {
        height: '100%',
        width: '100%',
        cursor: 'pointer',

        transition: 'all 0.3s',
        border: 0,
        boxShadow: 'none',
        opacity: 1,

        '&:hover': {
            transform: 'scale(1.05)',
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
});

class PictureViewer extends Component {
    constructor() {
        super();

        this.state = {
            selectedImageIndex: 0,
        }

        this.handlePictureSelect = this.handlePictureSelect.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handlePictureSelect(selectedImageIndex) {
        this.setState({ selectedImageIndex });
    }

    handleArrowClick(clickedNext) {
        return () => {
            const { selectedImageIndex } = this.state;
            const newImageIndex = clickedNext ? selectedImageIndex + 1 : selectedImageIndex - 1;
            this.setState({ selectedImageIndex: newImageIndex })
        };
    }

    render() {
        const { classes, images } = this.props;
        const { selectedImageIndex } = this.state;

        const imageItem = images[selectedImageIndex];

        return (
            <div className={classes.viewerWarpper}>
                <div className={classes.selectedImageWrapper}>
                    <div className={classes.selectedImageTitleBar}>
                        {imageItem.title}
                    </div>
                    <div
                        className={classes.previousImageToggler + (selectedImageIndex === 0 ? ' hidden' : '')}
                        onClick={this.handleArrowClick(false)}
                    >
                        <LeftArrowIcon className={classes.togglerArrowIcon}/>
                    </div>
                    <img className={classes.selectedImage} src={imageItem.image} alt={imageItem.alt} />
                    <div
                        className={classes.nextImageToggler + (selectedImageIndex === (images.length - 1) ? ' hidden' : '')}
                        onClick={this.handleArrowClick(true)}
                    >
                        <RightArrowIcon className={classes.togglerArrowIcon} />
                    </div>
                </div>
                <hr/>
                <Grid container spacing={16} className={classes.imageSelectPanel}>
                    {_.map(images, ({ image, alt }, i) =>
                        <Grid item xs={4} sm={3} md={2} key={i}>
                            <div
                                className={classes.panelImageWrapper + (i === selectedImageIndex ? ' selected' : '')}
                                onClick={() => this.handlePictureSelect(i)}
                            >
                                <img className={classes.panelImage} src={image} alt={alt} />
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}

PictureViewer.propTypes = {
    classes: PropTypes.object,
    images: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(PictureViewer);
