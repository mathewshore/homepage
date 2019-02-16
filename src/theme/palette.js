import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';


// Potential colors
// Primary: #f8c687 - light brown/orange
// Secondary: #45b29a - light green

const palette = {
    primary: red,
    secondary: green, // not used
    background: {
        primary: grey[200], // not used
        secondary: brown[400], // not used
        tertiary: '', // not used

        sections: {
            intro: grey[100],
            about: brown[200],
            portfolio: grey[300],
            skills: brown[400],
            contact: grey[700],

            paper: grey[100],
        },

        leftDrawer: grey[900],

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
