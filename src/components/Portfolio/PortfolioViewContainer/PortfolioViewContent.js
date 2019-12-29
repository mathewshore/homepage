import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import SpacingContainer from './SpacingContainer';


const styles = ({ spacing, breakpoints }) => ({
    container: {
        background: 'white',
        minHeight: `calc(100vh - ${spacing.unit * 18}px)`,
        [breakpoints.up('xs')]: {
            minHeight: `calc(100vh - ${spacing.unit * 18}px - ${spacing.unit * 4.5}px)`,
            padding: `${spacing.unit * 1.5}px 0px ${spacing.unit * 3}px`
        },
        [breakpoints.up('md')]: {
            minHeight: `calc(100vh - ${spacing.unit * 18}px - ${spacing.unit * 4}px)`,
            padding: `${spacing.unit * 2}px 0px`
        }
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
