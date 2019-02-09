import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';
import ArrowPanel from './ArrowPanel';


const styles = theme => ({
    carouselContainer: {
        background: grey[700],
    },
    titleBar: {
        padding: 4,
        background: 'rgba(42, 42, 42, 0.7)',
        textAlign: 'center',
        color: 'white',
    },
    imageCarousel: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 400
    },
    selectedImage: {
        maxWidth: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxHeight: 'inherit',
    },
});

const PictureCarousel = props => {
    const { classes, image, selectedImageIndex } = props;
    return (
        <div className={classes.carouselContainer}>
            <div className={classes.titleBar}>
                {image.title}
            </div>
            <div className={classes.imageCarousel}>
                <ArrowPanel
                    direction="previous"
                    onClick={props.onArrowClick(false)}
                    hidden={selectedImageIndex === 0}
                />
                <img className={classes.selectedImage} src={image.src} alt={image.alt} />
                <ArrowPanel
                    direction="next"
                    onClick={props.onArrowClick(true)}
                    hidden={selectedImageIndex === (props.imageCount - 1)}
                />
            </div>
        </div>
    );
};

PictureCarousel.propTypes = {
    classes: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired, // ToDo: define image shape.
    selectedImageIndex: PropTypes.number.isRequired,
    imageCount: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(PictureCarousel);