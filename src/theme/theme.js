import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import spacing from '@material-ui/core/styles/spacing';
import overrides from './overrides';
import palette from './palette';


const theme = createMuiTheme({
    palette,
    overrides,
    sectionDivider: {
        height: 5,
        margin: `${spacing.unit * 2.5}px 0 ${spacing.unit * 4}px`,
        width: `${spacing.unit * 8}px`,
        // ToDo: define divider background-color in theme/palette and use it here.
        // backgroundColor: `${blue[400]} !important`,
    },
});

export default theme;
