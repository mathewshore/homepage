import reduce from 'lodash/reduce';
import assign from 'lodash/assign';
import spacing from '@material-ui/core/styles/spacing';


const tooltipApiClasses = [
    'tooltipPlacementTop',
    'tooltipPlacementRight',
    'tooltipPlacementBottom',
    'tooltipPlacementLeft'
];

const tooltipPlacementClasses = reduce(
    tooltipApiClasses,
    (tooltipPlacements, tooltipClass) =>
        assign({}, tooltipPlacements, {
            [tooltipClass]: {
                margin: `${spacing.unit}px !important`
            }
        }
    ), {});

const overrides = {
    MuiPaper: {
        root: {
            borderRadius: '2px !important',
        }
    },
    MuiDivider: {
        root: {
            height: 5,
            margin: `${spacing.unit * 2.5}px 0 ${spacing.unit * 4}px`,
            width: `${spacing.unit * 8}px`,
        }
    },
    MuiTooltip: {
        ...tooltipPlacementClasses
    },
    MuiTypography: {
        body1: {
            fontSize: spacing.unit * 2,
            lineHeight: 1.5
        }
    }
};

export default overrides;
