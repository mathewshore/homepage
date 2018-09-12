import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import {
    Intro,
    About,
    Portfolio,
    Skills,
    Contact
} from './components/sections';
// import LeftDrawer from './components/LeftDrawer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import theme from './theme';

import 'bootstrap/dist/css/bootstrap.css';
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
                <NavBar />
                <Intro />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
                {/* <LeftDrawer /> */}
                <Footer />
            </MuiThemeProvider>
        );
    }
}
