import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import fledgeLogoText from './portfolio_images/fledge_logo.png';
import fledgeCharacter from './portfolio_images/fledge.png';


const styles = ({ spacing }) => ({
    container: {
        padding: spacing.unit * 4,
        background: '#a5e9ff'
    },
    logoTextImage: {
        width: '80%',
    },
    fledgeCharacterImage: {
        marginTop: 15,
        height: spacing.unit * 10
    }
});

const FledgePortfolioItem = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <img
                src={fledgeLogoText}
                className={classes.logoTextImage}
                alt="Fledge the Flying Hedgehog"
                />
            <img
                src={fledgeCharacter}
                className={classes.fledgeCharacterImage}
                alt="Fledge"
            />
        </div>
    );
};

FledgePortfolioItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FledgePortfolioItem);