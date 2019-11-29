import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ModalSpacingContainer from './ModalSpacingContainer';


const styles = ({ breakpoints, spacing }) => ({
    modalContent: {
        overflow: 'auto',
        background: 'white',
        height: `calc(100vh - ${spacing.unit * 21}px)`,

        [breakpoints.down('md')]: {
            height: `calc(100vh - ${spacing.unit * 19}px)`,
        },
        [breakpoints.down('sm')]: {
            height: `calc(100vh - ${spacing.unit * 17}px)`,
        }
    }
});

const ModalContent = props => {
    const { classes } = props;
    return (
        <div className={classes.modalContent}>
            <ModalSpacingContainer>
                {props.children}
            </ModalSpacingContainer>
        </div>
    );
};

ModalContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.node
    ])
};

export default withStyles(styles, { withTheme: true })(ModalContent);
