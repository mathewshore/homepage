import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ breakpoints }) => ({
    container: {
        paddingLeft: 0,
        paddingRight: 0,        
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 'inherit',
        display: 'inherit',
        alignItems: 'inherit',

        [breakpoints.up('md')]: {
            maxWidth: '80%', // spacing.unit * 120, // 960px,
        },
        // [breakpoints.up('lg')]: {
        //     maxWidth: '85%' // 1140px,
        // },
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
