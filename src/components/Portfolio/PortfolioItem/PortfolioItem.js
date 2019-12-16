import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import DetailCard from './DetailCard';
import ImageCard from './ImageCard';


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
            <div
                className={classes.container}
                onMouseEnter={this.onCardMouseEnter}
                onMouseLeave={this.onCardMouseLeave}
            >
                <ImageCard
                    onClick={this.props.onClick}
                    title={this.props.title}
                    imageSrc={this.props.imageSrc}
                />
                <DetailCard
                    visible={this.state.visibleDetails}
                    onClick={this.props.onClick}
                    title={this.props.title}
                    description={this.props.description}
                />
            </div>
        );
    }
}

PortfolioItem.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.string
};

export default withStyles(styles)(PortfolioItem);
