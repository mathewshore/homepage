import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import TextHeader from '../utils/TextHeader';


const styles = theme => ({
    logoContainer: {
        textTransform: 'uppercase',
        display: 'inline-block',
        // margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
    },
    menuToggler: {
        display: 'block',
        transition: 'all 0.3s',
        textDecoration: 'none',

        color: theme.palette.text.header.light,

        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
        },
    },
    logoText: {
        color: 'inherit',

        '&:hover': {
            color: 'inherit',
        },
    },
    remainingLetters: {
        fontSize: 22,
    }
});


class NavLogo extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.logoContainer}>
                <a
                    className={classes.menuToggler}
                    href='/#/'
                    onClick={this.props.toggleLeftDrawer}
                >
                    <TextHeader variant="display1" text="MATIAS RANTA" typographyClassName={classes.logoText} />
                </a>
            </div>
        );
    }
}

NavLogo.propTypes = {
    classes: PropTypes.object,
    toggleLeftDrawer: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(NavLogo);
