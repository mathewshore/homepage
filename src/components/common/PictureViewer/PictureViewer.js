import React, { Component } from 'react';
import PropTypes from 'prop-types';
import size from 'lodash/size';
import isEmpty from 'lodash/isEmpty';

import PreviewPanel from './PreviewPanel';
import PictureCarousel from './PictureCarousel';


class PictureViewer extends Component {
    state = {
        selectedImageIndex: 0,
    }

    handlePictureSelect = selectedImageIndex => {
        this.setState({ selectedImageIndex });
    }

    handleArrowClick = clickedNext => () => {
        const { selectedImageIndex } = this.state;
        const newImageIndex = clickedNext ? selectedImageIndex + 1 : selectedImageIndex - 1;
        this.setState({ selectedImageIndex: newImageIndex })
    }

    render() {
        const { images } = this.props;

        if (!images || isEmpty(images)) {
            return (
                <div>No images for display.</div>
            );
        }

        const { selectedImageIndex } = this.state;
        const selectedImage = images[selectedImageIndex];

        return (
            <div>
                <PictureCarousel
                    image={selectedImage}
                    imageCount={size(images)}
                    selectedImageIndex={selectedImageIndex}
                    onArrowClick={this.handleArrowClick}
                />
                <PreviewPanel
                    images={images}
                    selectedImageIndex={selectedImageIndex}
                    handlePictureSelect={this.handlePictureSelect}
                />
            </div>
        );
    }
}

PictureViewer.propTypes = {
    classes: PropTypes.object,
    images: PropTypes.array
};

export default PictureViewer;
