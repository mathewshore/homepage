import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints, spacing }) => ({
    container: {
        paddingLeft: 0,
        paddingRight: 0,        
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',

        [breakpoints.up('md')]: {
            maxWidth: spacing.unit * 120, // 960px,
        },
        [breakpoints.up('lg')]: {
            maxWidth: spacing.unit * 142.5 // 1140px,
        },
    },
});

const Container = (props) => {
    const { classes, className, children } = props;
    const classNames = [classes.container];
    if (className) {
        classNames.push(className);
    }

    return (
        <div className={join(classNames, ' ')}>
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
