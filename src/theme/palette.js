import { purple, green, grey, brown } from '@material-ui/core/colors';


const palette = {
    primary: purple,
    secondary: green, // not used
    background: {
        primary: grey[200], // not used
        secondary: brown[400], // not used
        tertiary: '', // not used

        sections: {
            intro: grey[100],
            about: brown[200],
            portfolio: grey[300],
            skills: brown[800],
            contact: grey[800],

            paper: grey[100],
        },

        leftDrawer: grey[900],

        footer: grey[900],
    },
    text: {
        header: {
            dark: grey[900],
            light: grey[100],
        }
    }
};

export default palette;
