import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        cursor: 'pointer',
    },
    cardContentRoot: {
        textAlign: 'left'
    },
    portfolioImage: {
        width: '100%',
    }
};

const PortfolioCard = props => {
    const { classes } = props;

    return (
        <Card
            component={ButtonBase}
            classes={{ root: classes.card }}
            onClick={props.onClick}
        >
            <div>
                <img src={props.imageSrc} className={classes.portfolioImage} alt={props.title} />
                <CardContent classes={{ root: classes.cardContentRoot }}>
                    <Typography variant="title">
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.description}
                    </Typography>
                </CardContent>
            </div>
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
