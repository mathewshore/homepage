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
            <SpacingContainer verticalSpacing={props.verticalSpacing}>
                {props.children}
            </SpacingContainer>
        </div>
    );
};

PortfolioViewFooter.defaultProps = {
    verticalSpacing: 'normal'
};

PortfolioViewFooter.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
    verticalSpacing: PropTypes.oneOf(['normal', 'dense'])
};

export default withStyles(styles)(PortfolioViewFooter);
