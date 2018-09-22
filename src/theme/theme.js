import { createMuiTheme } from '@material-ui/core/styles';
import overrides from './overrides';
import palette from './palette';
import zIndex from '../components/zIndex'; 


const theme = createMuiTheme({
    palette,
    overrides,
    leftDrawerWidth: 256,
    sectionDivider: {
        height: 5,
        margin: '20px 0 32px',
        width: 60,
        // ToDo: define divider background-color in theme/palette and use it here.
        // backgroundColor: `${blue[400]} !important`,
    },
    navBarContainer: {
        zIndex: zIndex.navigation,
        position: 'fixed',
        left: 0,
        width: '100%',
    }
});

export default theme;
