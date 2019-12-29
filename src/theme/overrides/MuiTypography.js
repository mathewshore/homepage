import spacing from '@material-ui/core/styles/spacing';
import breakpoints from '../breakpoints';


const MuiTypography = {
    // ToDo: define xl font sizes for other typography variants
    body1: {
        fontSize: spacing.unit * 2,
        lineHeight: 1.6,
        [breakpoints.up('xl')]: {
            fontSize: spacing.unit * 4
        }
    },
    display1: {
        [breakpoints.down('xs')]: {
            fontSize: 28
        },
        [breakpoints.up('xl')]: {
            fontSize: 40
        }
    },
    display2: {
        [breakpoints.up('xl')]: {
            fontSize: 40
        }
    },
    title: {
        [breakpoints.up('xl')]: {
            fontSize: 32
        }
    }
}

export default MuiTypography;
