import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';


const styles = ({ spacing }) => ({
    portfolioItemContainer: {
        position: 'relative',
        zIndex: 0
    },
    card: {
        cursor: 'pointer',
    },
    details: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 2,
        color: 'white',
        background: `${grey[900]}e9`, // e9 for transparency
        transition: 'opacity 0.3s ease',
        opacity: 0,
        '&.visible': {
            opacity: 1
        }
    },
    cardContentRoot: {
        textAlign: 'left'
    },
    portfolioImage: {
        width: '100%',
        maxHeight: 260
    },
    itemContentContainer: {
        maxHeight: 260
    },
    itemTitle: {
        color: grey[50]
    },
    itemDescription: {
        color: grey[50],
        marginTop: spacing.unit
    }
});

class PortfolioItem extends Component {
    state = {
        showDetails: false
    };

    onCardMouseEnter = () => {
        this.setState({ showDetails: true });
    };

    onCardMouseLeave = () => {
        this.setState({ showDetails: false });
    };

    render() {
        // ToDo: Split into smaller components.
        const { classes } = this.props;
    
        return (
            <div
                className={classes.portfolioItemContainer}
                onMouseEnter={this.onCardMouseEnter}
                onMouseLeave={this.onCardMouseLeave}
            >
                <Paper
                    component={ButtonBase}
                    classes={{ root: classes.card }}
                    onClick={this.props.onClick}
                >
                    {this.props.children ? (
                        <div className={classes.itemContentContainer}>

                            {this.props.children}
                        </div>
                    ) : (
                        <img
                            src={this.props.imageSrc}
                            className={classes.portfolioImage}
                            alt={this.props.title}
                        />
                    )}
                </Paper>
                <Paper
                    component={ButtonBase}
                    classes={{ root: classes.details + (this.state.showDetails ? ' visible' : '') }}
                    onClick={this.props.onClick}
                >
                    <div>
                        <Typography
                            variant="title"
                            classes={{ root: classes.itemTitle }}
                        >
                            {this.props.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            classes={{ root: classes.itemDescription }}
                        >
                            {this.props.description}
                        </Typography>
                    </div>
                </Paper>
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
