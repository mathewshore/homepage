import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, breakpoints }) => ({
    modalContent: {
        margin: `${spacing.unit * 16}px 0 ${spacing.unit * 6}px`,

        [breakpoints.down('md')]: {
            margin: `${spacing.unit * 15.5}px 0 ${spacing.unit * 6}px`,
        },
        [breakpoints.down('sm')]: {
            margin: `${spacing.unit * 14.5}px 0 ${spacing.unit * 6}px`,
        },
    }
});

const ModalContent = props => (
    <div className={props.classes.modalContent}>
        {props.children}
    </div>
);

ModalContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.node
    ])
};

export default withStyles(styles, { withTheme: true })(ModalContent);
