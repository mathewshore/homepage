import spacing from '@material-ui/core/styles/spacing';
import breakpoints from '../breakpoints';


const MuiTypography = {
    // ToDo: define xl font sizes for other typography variants
    body1: {
        fontSize: spacing.unit * 2,
        lineHeight: 1.6,
        [breakpoints.up('xl')]: {
            fontSize: spacing.unit * 3.5
        }
    },
    display1: {
        [breakpoints.down('xs')]: {
            fontSize: 24
        },
        [breakpoints.up('xl')]: {
            fontSize: 48
        }
    },
    display2: {
        [breakpoints.up('xl')]: {
            fontSize: 40
        }
    },
    title: {
        [breakpoints.down('xs')]: {
            fontSize: 20
        },
        [breakpoints.up('xl')]: {
            fontSize: 36
        }
    }
}

export default MuiTypography;
