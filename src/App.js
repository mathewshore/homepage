import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

import theme from './theme';

import './App.css';


const App = () => (
    <MuiThemeProvider theme={theme}>
        <NavBar />
        <Intro />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
    </MuiThemeProvider>
);

export default App;
