import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Section from '../common/Section';
import GridContainer from '../common/GridContainer';
import PortfolioItem from './PortfolioItem';
import portfolioItems from './portfolioItems';

import { SECTIONS } from '../constants';


const styles = ({ palette }) => ({
    portfolioSectionContainer: {
        background: palette.background.portfolio,
    }
});

const Portfolio = props => {
    // ToDo: Upgrade react version and use hook here.
    // ToDo: Add tags to portfolio items.

    const { classes } = props;

    return (
        <Section
            id={SECTIONS.PORTFOLIO}
            containerClassName={classes.portfolioSectionContainer}
        >
            <GridContainer>
                {map(portfolioItems, (item) => (
                    <Grid
                        item
                        sm={6}
                        xs={12}
                        key={item.id}
                        id={item.id}
                    >
                        <PortfolioItem {...item} />
                    </Grid>
                ))}
            </GridContainer>
        </Section>
    );
};

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
