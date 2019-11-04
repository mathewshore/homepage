import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ModalSpacingContainer from './ModalSpacingContainer';


const styles = ({ palette }) => ({
    footerContainer: {
        background: palette.primary.light
    }
});

const ModalFooter = props => {
    const { classes } = props;
    return (
        <div className={classes.footerContainer}>
            <ModalSpacingContainer verticalSpacing={props.verticalSpacing}>
                {props.children}
            </ModalSpacingContainer>
        </div>
    );
};

ModalFooter.defaultProps = {
    verticalSpacing: 'normal'
};

ModalFooter.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
    verticalSpacing: PropTypes.oneOf(['normal', 'dense'])
};

export default withStyles(styles)(ModalFooter);
