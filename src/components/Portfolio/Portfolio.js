import React, { Component } from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import omit from 'lodash/omit';
import find from 'lodash/find';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Section from '../common/Section';
import Modal from '../common/Modal';
import PortfolioItem from './PortfolioItem';
import portfolioItems from './portfolioItems';

import { SECTIONS } from '../constants';


const styles = ({ palette }) => ({
    portfolioSectionContainer: {
        background: palette.background.portfolio,
    }
});

class Portfolio extends Component {
    state = {
        portfolioItemId: 'rps',
    };

    togglePortfolioModal = portfolioItemId => () => {
        this.setState({ portfolioItemId });
    }

    render() {
        // ToDo: Upgrade react version and use hook here.
        // ToDo: Add tags to portfolio items.
        const { classes } = this.props;
        const portfolioItem = find(portfolioItems, { id: this.state.portfolioItemId });

        return (
            <Section
                id={SECTIONS.PORTFOLIO}
                containerClassName={classes.portfolioSectionContainer}
            >
                <Grid container spacing={24}>
                    {map(portfolioItems, (item) => (
                        <Grid item md={6} xs={12} key={item.id}>
                            <PortfolioItem
                                {...omit(item, ['id'])}
                                onClick={this.togglePortfolioModal(item.id)}
                            />
                            {/* {this.renderPortfolioItemContent(item)} */}
                        </Grid>
                    ))}
                </Grid>
                {portfolioItem && (
                    <Modal
                        onClose={this.togglePortfolioModal(null)}
                        title={portfolioItem.title}
                        description={portfolioItem.longDescription}
                        ModalFooterContent={portfolioItem.FooterContent}
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

export default withStyles(styles)(Portfolio);
