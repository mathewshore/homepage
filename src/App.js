import React, { Fragment } from 'react';
import find from 'lodash/find';
import { Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

import TicTacToe from './components/Portfolio/TicTacToe';
import StreamPortal from './components/Portfolio/StreamPortal';
import RockPaperScissors from './components/Portfolio/RockPaperScissors';
import Snake from './components/Portfolio/Snake';

import theme from './theme';
import history from './history';

import './App.css';

import PortfolioViewContainer from './components/Portfolio/PortfolioViewContainer';
import portfolioItems, { PORTFOLIO_IDS } from './components/Portfolio/portfolioItems';


const getPortfolioView = id => {
    switch (id) {
        case PORTFOLIO_IDS.SNAKE:
            return Snake;
        case PORTFOLIO_IDS.RPS:
            return RockPaperScissors;
        case PORTFOLIO_IDS.TTT:
            return TicTacToe;
        case PORTFOLIO_IDS.STREAM_PORTAL:
            return StreamPortal;
        default:
            return () => '404';
    }
};

const PortfolioRouter = props => {
    const { id } = props.match.params;
    const PortfolioView = getPortfolioView(id);
    const PortfolioContainerProps = find(portfolioItems, { id });

    return (
        <PortfolioViewContainer {...PortfolioContainerProps}>
            <PortfolioView />
        </PortfolioViewContainer>
    );
};

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Fragment>
                        <NavBar />
                        <Intro />
                        <About />
                        <Portfolio />
                        <Skills />
                        <Contact />
                        <Footer />
                    </Fragment>
                </Route>
                <Route path="/portfolio/:id" component={PortfolioRouter} />
            </Switch>
        </Router>
    </MuiThemeProvider>
);

export default App;
