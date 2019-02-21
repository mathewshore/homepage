import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';


// Potential colors
// Primary: #f8c687 - light brown/orange
// Secondary: #45b29a - light green

const sectionBgColor = '#fae8d3';

const palette = {
    primary: {
        light: '#63d6bd',
        main: '#45b29a',
        dark: '#399984'
    },
    secondary: {
        light: red[200],
        main: red[400],
        dark: red[800],
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
        light: grey[50],
        header: {
            dark: grey[900],
            light: grey[50],
        }
    },
    transparent: 'transparent'
};

export default palette;
