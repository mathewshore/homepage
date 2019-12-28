import reduce from 'lodash/reduce';
import spacing from '@material-ui/core/styles/spacing';


const tooltipApiClasses = [
    'tooltipPlacementTop',
    'tooltipPlacementRight',
    'tooltipPlacementBottom',
    'tooltipPlacementLeft'
];

const tooltipPlacementClasses = reduce(
    tooltipApiClasses,
    (tooltipPlacements, tooltipClass) => ({
        ...tooltipPlacements,
        [tooltipClass]: {
            margin: `${spacing.unit}px !important`
        }
    }), {}
);

const MuiTooltip = {
    ...tooltipPlacementClasses
};

export default MuiTooltip;
