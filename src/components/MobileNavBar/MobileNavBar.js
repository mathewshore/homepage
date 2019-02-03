import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import MobileNavBarContent from './MobileNavBarContent';
import Container from '../utils/Container';


const styles = theme => ({
    navBarContainer: {
        ...theme.navBarContainer,
        bottom: 0,
        background: theme.palette.background.navBar,
        boxShadow: theme.shadows[5],
    }
});


class MobileNavBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.navBarContainer}>
                <Container>
                    <MobileNavBarContent />
                </Container>
            </div>
        );
    }
}

MobileNavBar.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(MobileNavBar);
