import breakpoints from '../../../theme/breakpoints';


const iconBaseStyles = {
    transition: 'all 0.4s ease',

    '&.selected': {
        fontSize: 32
    },
    '&.large': {
        fontSize: 48
    },
    [breakpoints.down('sm')]: {
        fontSize: 20,
        '&.selected': {
            fontSize: 21
        },
        '&.large': {
            fontSize: 36
        }
    },
    [breakpoints.up('xl')]: {
        fontSize: 44,
        '&.selected': {
            fontSize: 52
        },
        '&.large': {
            fontSize: 52
        }
    }
};

export default iconBaseStyles;
