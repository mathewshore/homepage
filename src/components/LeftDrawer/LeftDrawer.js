import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';

import zIndex from '../zIndex';


const styles = theme => ({
    drawerContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: zIndex.leftDrawer
    },
    drawerPaper: {
        background: theme.palette.background.leftDrawer,
        width: theme.leftDrawerWidth,
    }
});

class LeftDrawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerIsOpen: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
    }

    render() {
        const { classes } = this.props;
        const { drawerIsOpen } = this.state;

        return (
            <div className={classes.drawerContainer}>
                <NavLogo toggleLeftDrawer={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
                <Drawer classes={{ paper: classes.drawerPaper }} open={drawerIsOpen} onClose={this.toggleDrawer}>
                    <NavLinks />
                    <Divider />
                </Drawer>
            </div>
        );
    }
}

LeftDrawer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(LeftDrawer);
