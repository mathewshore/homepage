import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import DetailCard from './DetailCard';
import ImageCard from './ImageCard';


const styles = ({
    container: {
        position: 'relative',
        zIndex: 0
    }
});

const PortfolioItem = props => {
    const { classes } = props;
    const [visibleDetails, setVisibleDetails] = useState(false);

    const onCardMouseEnter = () => setVisibleDetails(true);

    const onCardMouseLeave = () => setVisibleDetails(false);
    
    return (
        <Link to={`/portfolio/${props.id}`}>
            <div
                className={classes.container}
                onMouseEnter={onCardMouseEnter}
                onMouseLeave={onCardMouseLeave}
            >
                <ImageCard
                    title={props.title}
                    imageSrc={props.imageSrc}
                />
                <DetailCard
                    visible={visibleDetails}
                    title={props.title}
                    description={props.description}
                />
            </div>
        </Link>
    );
};

PortfolioItem.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.string
};

export default withStyles(styles)(PortfolioItem);
