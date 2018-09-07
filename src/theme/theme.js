import { createMuiTheme } from '@material-ui/core/styles';
import overrides from './overrides';
import palette from './palette';


const theme = createMuiTheme({
    palette,
    overrides,
    leftDrawerWidth: 256,
    sectionDivider: {
        height: 5,
        margin: '20px 0 30px',
        width: 60,
        // backgroundColor: `${blue[400]} !important`,
    }
});

export default theme;
