import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';


// Potential colors
// Primary: #45b29a - green

const sectionBgColor = '#99DBDB'; // light blue

const palette = {
    primary: {
        light: '#63d6bd',
        main: '#45b29a',
        dark: '#399984'
    },
    secondary: {
        light: green[100],
        main: green[400],
        dark: green[800],
    },
    background: {
        primary: grey[200], // not used
        secondary: brown[400], // not used
        tertiary: '', // not used

        paper: grey[100],

        intro: grey[100],
        about: sectionBgColor,
        skills: sectionBgColor,
        contact: sectionBgColor,
        portfolio: sectionBgColor,

        navBar: grey[800],
        footer: grey[900],
    },
    text: {
        light: grey[50],
        main: grey[700],
        header: {
            dark: grey[900],
            light: grey[50],
        }
    },
    info: {
        light: blue[200],
        main: blue[400],
        dark: blue[600]
    },
    success: {
        light: green[200],
        main: green[400],
        dark: green[600]
    },
    danger: {
        light: red[100],
        main: red[600],
        dark: red[900]
    },
    transparent: 'transparent'
};

export default palette;
