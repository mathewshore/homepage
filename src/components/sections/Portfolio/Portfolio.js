import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import find from 'lodash/find';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import Modal from '../../common/Modal';
import PortfolioCard from './PortfolioCard';
import portfolioItems from './portfolioItems';

import { SECTIONS } from '../../constants';


const styles = theme => ({
    portfolioSectionContainer: {
        background: theme.palette.background.sections.portfolio,
    }
});

class Portfolio extends Component {
    state = {
        portfolioItemId: '',
    };

    togglePortfolioModal = portfolioItemId => () => {
        this.setState({ portfolioItemId });
    }

    render() {
        const { classes } = this.props;
        const portfolioItem = find(portfolioItems, { id: this.state.portfolioItemId });

        return (
            <Section id={SECTIONS.PORTFOLIO} containerClassName={classes.portfolioSectionContainer}>
                <Grid container spacing={24}>
                    {map(portfolioItems, ({ id, imgSrc, title, shortDescription }) => (
                        <Grid item md={6} xs={12} key={id}>
                            <PortfolioCard
                                title={title}
                                imageSrc={imgSrc}
                                description={shortDescription}
                                onClick={this.togglePortfolioModal(id)}
                            />
                        </Grid>
                    ))}
                </Grid>
                {portfolioItem && (
                    <Modal
                        onClose={this.togglePortfolioModal(null)}
                        title={portfolioItem.title}
                        description={portfolioItem.longDescription}
                    >
                        <portfolioItem.Component />
                    </Modal>
                )}
            </Section>
        );
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Portfolio);
