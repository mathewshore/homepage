import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import LeftArrowIcon from '@material-ui/icons/ChevronLeft';
import RightArrowIcon from '@material-ui/icons/ChevronRight';

import grey from '@material-ui/core/colors/grey';

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
    },
    selectedImage: {
        maxWidth: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxHeight: '100%',
    },
    imageToggler: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '10%', // ToDo: define media screen based widths. 
        height: '100%',
        textAlign: 'center',
        cursor: 'pointer',

        transition: 'all 0.3s, visibility 0s linear, opacity 0.3s linear',
        background: 'rgba(0, 0, 0, 0.1)',
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
        },
        '&.previous': {
            left: 0,
        },
        '&.next': {
            right: 0,
        },
    },
    togglerArrowIcon: {
        fontSize: 'calc(3vw + 3vh)',
    },
});

const PictureCarousel = props => {
    const { classes, image, imageCount, selectedImageIndex } = props;
    return (
        <div className={classes.carouselContainer}>
            <div className={classes.titleBar}>
                {image.title}
            </div>
            <div className={classes.imageCarousel}>
                <div
                    className={classes.imageToggler + ' previous' + (selectedImageIndex === 0 ? ' hidden' : '')}
                    onClick={props.onArrowClick(false)}
                >
                    <LeftArrowIcon className={classes.togglerArrowIcon}/>
                </div>
                <img className={classes.selectedImage} src={image.image} alt={image.alt} />
                <div
                    className={classes.imageToggler + ' next' + (selectedImageIndex === (imageCount - 1) ? ' hidden' : '')}
                    onClick={props.onArrowClick(true)}
                >
                    <RightArrowIcon className={classes.togglerArrowIcon} />
                </div>
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