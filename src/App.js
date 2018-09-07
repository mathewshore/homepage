import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import LeftDrawer from './components/LeftDrawer';
import sections from './components/sections';
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
        <LeftDrawer />
        {sections}
        <Footer />
      </MuiThemeProvider>
    );
  }
}
