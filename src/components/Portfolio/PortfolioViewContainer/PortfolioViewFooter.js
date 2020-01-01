import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import SpacingContainer from './SpacingContainer';


const styles = ({ palette }) => ({
    container: {
        background: palette.primary.light
    }
});

const PortfolioViewFooter = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <SpacingContainer>
                {props.children}
            </SpacingContainer>
        </div>
    );
};

PortfolioViewFooter.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(PortfolioViewFooter);
