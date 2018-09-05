import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    listItemRoot: {
        padding: 0,
    },
    navLink: {
        display: 'block',
        color: 'white',
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        textTransform: 'uppercase',
        padding: '10px 28px',
        transition: 'all 0.3s',

        '&:hover': {
            color: 'purple',
            textDecoration: 'none',
            transform: 'scale(1.1)',
        },
    }
});

class NavItem extends Component {
    render() {
        const { classes, text, link } = this.props;

        return (
            <a href={`#${link}`} className={classes.navLink}>
                {text}
            </a>
        );
        // return (
        //     <ListItem button={true} classes={{ root: classes.listItemRoot }}>
        //         <a href={`#${link}`} className={classes.navLink}>
        //             {text}
        //         </a>
        //     </ListItem>
        // );
    }
}

NavItem.propTypes = {
    classes: PropTypes.object,
    text: PropTypes.string,
    link: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(NavItem);
