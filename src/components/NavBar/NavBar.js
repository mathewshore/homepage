import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import NavLinks from './NavLinks';
import NavLogo from './NavLogo';
import Container from '../utils/Container';

import zIndex from '../zIndex';


const styles = (theme) => ({
    navBarContainer: {
        zIndex: zIndex.navigation,
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        background: theme.palette.background.navBar,
        boxShadow: theme.shadows[5]
    },
    container: {
        display: 'flex',
    },
});

class NavBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.navBarContainer}>
                <Container className={classes.container}>
                    <NavLogo />
                    <NavLinks />
                </Container>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NavBar);
