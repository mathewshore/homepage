import spacing from '@material-ui/core/styles/spacing';
import breakpoints from '../breakpoints';


const MuiDivider = {
    root: {
        height: 5,
        margin: `${spacing.unit * 2.5}px 0px ${spacing.unit * 4}px`,
        width: spacing.unit * 8,
        [breakpoints.up('xl')]: {
            margin: `${spacing.unit * 4}px 0px ${spacing.unit * 5}px`,
            width: spacing.unit * 10
        }
    }
}

export default MuiDivider;
