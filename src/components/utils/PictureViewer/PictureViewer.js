import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ChevronLeft as LeftArrowIcon, ChevronRight as RightArrowIcon } from '@material-ui/icons';
import PictureSelectPanel from './PictureSelectPanel';

import { grey } from '@material-ui/core/colors';


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

const styles = theme => ({
    viewerWarpper: {
        height: 'calc(100% - (40px + 16px + 33px))', // (modal-padding-header-height + modal-caption-height + hr-height)
        background: 'white',
    },
    pictureViewerContainer: {
        height: '100%',
    },
    selectedImageWrapper: {
        textAlign: 'center',
        height: '100%',
        background: grey[700],
        position: 'relative',
    },
    selectedImageTitleBar: {
        padding: 4,
        background: 'rgba(42, 42, 42, 0.7)',
        textAlign: 'center',
        color: 'white',
    },
    selectedImage: {
        maxWidth: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100% - 32px)',
    },
    imageToggler: {
        ...imageToggler,
        '&.previous': {
            left: 0,
        },
        '&.next': {
            right: 0,
        },
    },
    togglerArrowIcon: {
        top: 'calc(50% - 32px)',
        position: 'relative',
        fontSize: 'calc(3vw + 3vh)',
    },
    pictureSelectPanelContainer: {
        maxHeight: '100%',
        overflow: 'auto',
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
        const selectedImageItem = images[selectedImageIndex];

        return (
            <div className={classes.viewerWarpper}>
                <Grid container spacing={16} className={classes.pictureViewerContainer}>
                    <Grid item sm={12} md={9}>
                        <div className={classes.selectedImageWrapper}>
                            <div className={classes.selectedImageTitleBar}>
                                {selectedImageItem.title}
                            </div>
                            <div
                                className={classes.imageToggler + ' previous' + (selectedImageIndex === 0 ? ' hidden' : '')}
                                onClick={this.handleArrowClick(false)}
                            >
                                <LeftArrowIcon className={classes.togglerArrowIcon}/>
                            </div>
                            <img className={classes.selectedImage} src={selectedImageItem.image} alt={selectedImageItem.alt} />
                            <div
                                className={classes.imageToggler + ' next' + (selectedImageIndex === (images.length - 1) ? ' hidden' : '')}
                                onClick={this.handleArrowClick(true)}
                            >
                                <RightArrowIcon className={classes.togglerArrowIcon} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={3}>
                        <div className={classes.pictureSelectPanelContainer}>
                            <PictureSelectPanel
                                images={images}
                                selectedImageIndex={selectedImageIndex}
                                handlePictureSelect={this.handlePictureSelect}
                            />
                        </div>
                    </Grid>
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
