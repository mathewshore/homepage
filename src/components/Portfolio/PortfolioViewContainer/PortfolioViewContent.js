import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import SpacingContainer from './SpacingContainer';


const styles = ({ spacing }) => ({
    container: {
        background: 'white',
        minHeight: `calc(100vh - ${spacing.unit * 18}px)`
    }
});

const PortfolioViewContent = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <SpacingContainer>
                {props.children}
            </SpacingContainer>
        </div>
    );
};

PortfolioViewContent.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(PortfolioViewContent);
