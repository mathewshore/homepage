import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';
import lightGreen from '@material-ui/core/colors/lightGreen';


// Potential colors
// Primary: #f8c687 - light brown/orange
// Secondary: #45b29a - light green

const sectionBgColor = '#fae8d3';

const palette = {
    primary: {
        light: red[200],
        main: red[400],
        dark: red[800],
    },
    // secondary: green,
    secondary: {
        light: '#63d6bd',
        main: '#45b29a',
        dark: '#399984'
    },
    background: {
        primary: grey[200], // not used
        secondary: brown[400], // not used
        tertiary: '', // not used

        sections: {
            intro: grey[100],
            about: sectionBgColor,
            portfolio: sectionBgColor,
            skills: sectionBgColor,
            contact: sectionBgColor,

            paper: grey[100],
        },
        navBar: grey[800],
        footer: grey[900],
    },
    text: {
        header: {
            dark: grey[900],
            light: grey[100],
        }
    },
    transparent: 'transparent'
};

export default palette;
