import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Section from '../Section';
import Modal from '../../utils/Modal';

import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';

import testImg from '../../../bg_intro.jpg';


const styles = theme => ({
    portfolioSectionContainer: {
        background: theme.palette.background.sections.portfolio,
    },
    card: {
        cursor: 'pointer',
    },
    portfolioImage: {
        width: '100%',
    }
});

const portfolioItems = {
    flexer: {
        img: testImg,
        title: 'Flexer',
        shortDescription: 'Flexible time management system',
        longDescription: 'Add modal description here',
        modalElement: <Flexer />,
    },
    fledge: {
        img: testImg,
        title: 'Fledge the Hedgehog',
        shortDescription: 'Mobile game for Apple phones',
        longDescription: 'Add modal description here',
        modalElement: <div>Add component here</div>,
    },
    softala: {
        img: testImg,
        title: 'Softala Course Management System',
        shortDescription: 'A web application for managing training sessions',
        longDescription: 'Add modal description here',
        modalElement: <div>Add component here</div>,
    },
    rps: {
        img: testImg,
        title: 'Rock Paper Scissors',
        shortDescription: 'A small project for testing out React and learning simplistic designing',
        longDescription: 'Add modal description here',
        modalElement: <RockPaperScissors />,
    },
    ttt: {
        img: testImg,
        title: 'Tic Tac Toe',
        shortDescription: 'A project for improving programming logic',
        longDescription: 'A practise project for improving logical approach of stuff',
        modalElement: <TicTacToe />,
    },
};

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItemKey: 'flexer',
        };

        this.togglePortfolioModal = this.togglePortfolioModal.bind(this);
    }

    togglePortfolioModal(portfolioItemKey) {
        this.setState({ portfolioItemKey });
    }

    renderPortfolioItems(classes) {
        return map(portfolioItems, (portfolioItem, key) => {
            const { img, title, shortDescription } = portfolioItem;

            return (
                <Grid item md={6} xs={12} key={key}>
                    <Card
                        className={classes.card}
                        onClick={() => this.togglePortfolioModal(key)}
                    >
                        <img src={img} className={classes.portfolioImage} alt='Lorem ipsum' />
                        <CardContent>
                            <Typography variant="title">{title}</Typography>
                            <Typography variant="body2">{shortDescription}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        });
    }

    render() {
        const { classes } = this.props;
        const portfolioItem = get(portfolioItems, this.state.portfolioItemKey);

        return (
            <div>
                <Section id='portfolio' containerClassName={classes.portfolioSectionContainer}>
                    <Grid container spacing={24}>
                        {this.renderPortfolioItems(classes)}
                    </Grid>
                </Section>
                {portfolioItem &&
                    <Modal
                        onClose={() => this.togglePortfolioModal(null)}
                        title={portfolioItem.title}
                        description={portfolioItem.longDescription}
                    >
                        {portfolioItem.modalElement}
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
