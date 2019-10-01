import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import find from 'lodash/find';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import Modal from '../../common/Modal';
import PortfolioItem from './PortfolioItem';
import portfolioItems from './portfolioItems';

import { SECTIONS } from '../../constants';
import FledgePortfolioItem from './FledgePortfolioItem';


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

    renderPortfolioItemContent = ({
        id,
        imgSrc,
        content,
        title,
        shortDescription
    }) => {
        const defaultProps = {
            title,
            description: shortDescription,
            onClick: this.togglePortfolioModal(id)
        };
        if (id === 'fledge') {
            return (
                <PortfolioItem {...defaultProps}>
                    <FledgePortfolioItem />
                </PortfolioItem>
            );
        }
        return <PortfolioItem {...defaultProps} imageSrc={imgSrc} />;
    };

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
                            {this.renderPortfolioItemContent(item)}
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

export default withStyles(styles)(Portfolio);
