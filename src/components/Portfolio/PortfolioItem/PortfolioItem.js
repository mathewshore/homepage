import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import DetailCard from './DetailCard';
import ImageCard from './ImageCard';

import { Link } from 'react-router-dom';


const styles = ({
    container: {
        position: 'relative',
        zIndex: 0
    }
});

class PortfolioItem extends Component {
    state = {
        visibleDetails: false
    };

    onCardMouseEnter = () => {
        this.setState({ visibleDetails: true });
    };

    onCardMouseLeave = () => {
        this.setState({ visibleDetails: false });
    };

    render() {
        const { classes } = this.props;
    
        return (
            <Link to={`/portfolio/${this.props.id}`}>
                <div
                    className={classes.container}
                    onMouseEnter={this.onCardMouseEnter}
                    onMouseLeave={this.onCardMouseLeave}
                >
                    <ImageCard
                        title={this.props.title}
                        imageSrc={this.props.imageSrc}
                    />
                    <DetailCard
                        visible={this.state.visibleDetails}
                        title={this.props.title}
                        description={this.props.description}
                    />
                </div>
            </Link>
        );
    }
}

PortfolioItem.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.string
};

export default withStyles(styles)(PortfolioItem);
