import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Hidden from '@material-ui/core/Hidden';
import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar';
import Footer from './components/Footer';
import {
    Intro,
    About,
    Portfolio,
    Skills,
    Contact
} from './components/sections';

import theme from './theme';

import './App.css';


// const styles = theme => ({
//   '@global': {
//     html: {
//       background: theme.palette.background.default,
//       WebkitFontSmoothing: 'antialiased', // Antialiasing.
//       MozOsxFontSmoothing: 'grayscale', // Antialiasing.
//     },
//     body: {
//       margin: 0,
//     },
//   },
// });

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Hidden smDown>
                    <NavBar />
                </Hidden>
                <Hidden mdUp>
                    <MobileNavBar />
                </Hidden>
                <Intro />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
                <Footer />
            </MuiThemeProvider>
        );
    }
}
