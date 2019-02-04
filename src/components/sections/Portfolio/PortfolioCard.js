import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        cursor: 'pointer',
    },
    portfolioImage: {
        width: '100%',
    }
};

const PortfolioCard = props => {
    const { classes } = props;

    return (
        <Card
            className={classes.card}
            onClick={props.onClick}
        >
            <img src={props.imageSrc} className={classes.portfolioImage} alt={props.title} />
            <CardContent>
                <Typography variant="title">{props.title}</Typography>
                <Typography variant="body2">{props.description}</Typography>
            </CardContent>
        </Card>
    );
};

PortfolioCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.string
};

export default withStyles(styles)(PortfolioCard);
