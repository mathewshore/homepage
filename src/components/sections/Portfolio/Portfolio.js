import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import Modal from '../../common/Modal';
import PortfolioCard from './PortfolioCard';
import portfolioItems from './portfolioItems';


const styles = theme => ({
    portfolioSectionContainer: {
        background: theme.palette.background.sections.portfolio,
    }
});

class Portfolio extends Component {
    state = {
        portfolioItemKey: 'rps',
    };

    togglePortfolioModal = portfolioItemKey => () => {
        this.setState({ portfolioItemKey });
    }

    render() {
        const { classes } = this.props;
        const portfolioItem = get(portfolioItems, this.state.portfolioItemKey);

        return (
            <div>
                <Section id='portfolio' containerClassName={classes.portfolioSectionContainer}>
                    <Grid container spacing={24}>
                        {map(portfolioItems, (portfolioItem, key) => (
                            <Grid item md={6} xs={12} key={key}>
                                <PortfolioCard
                                    onClick={this.togglePortfolioModal(key)}
                                    imageSrc={portfolioItem.img}
                                    title={portfolioItem.title}
                                    description={portfolioItem.shortDescription}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Section>
                {portfolioItem &&
                    <Modal
                        onClose={this.togglePortfolioModal(null)}
                        title={portfolioItem.title}
                        description={portfolioItem.longDescription}
                    >
                        <portfolioItem.Component />
                    </Modal>
                }
            </div>
        );
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Portfolio);
