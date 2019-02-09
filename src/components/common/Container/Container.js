import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    container: {
        paddingLeft: 0,
        paddingRight: 0,        
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',

        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing.unit * 67.5 // 540px,
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: theme.spacing.unit * 90, // 720px,
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: theme.spacing.unit * 120, // 960px,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: theme.spacing.unit * 142.5 // 1140px,
        },
    },
});

const Container = (props) => {
    const { classes, className, children } = props;
    return (
        <div className={`${classes.container}${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default withStyles(styles, { withTheme: true })(Container);
