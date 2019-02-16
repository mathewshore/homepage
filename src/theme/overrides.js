import spacing from '@material-ui/core/styles/spacing';


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
    }
};

export default overrides;
