import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-scroll';
import TextHeader from '../utils/TextHeader';


const navLinks = ['intro', 'about', 'portfolio', 'skills', 'contact'];

const styles = theme => ({
    navLinksContainer: {
        marginTop: theme.spacing.unit * 0.5,
        width: '100%',
        textAlign: 'right',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    navLink: {
        textTransform: 'uppercase',
        margin: `0 ${theme.spacing.unit * 2}px`,
        transition: 'all 0.3s, opacity 0.2s linear',
        '&:last-of-type': {
            marginRight: 0
        }
    },
    navLinkText: {
        cursor: 'pointer',
        color: theme.palette.text.header.light,
        transition: 'all 0.3s',
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
        },
    },
    navLinkTypography: {
        display: 'initial',
    },
});

class NavLinks extends Component {
    state = {};

    // Todo: add window location listener to App and use it to highlight active link.

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.navLinksContainer}>
                {map(navLinks, (linkId, i) => (
                    <div key={linkId} className={classes.navLink}>
                        <Link to={linkId} smooth>
                            <TextHeader
                                variant="subheading"
                                text={linkId}
                                className={classes.navLinkText}
                                typographyClassName={classes.navLinkTypography}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

NavLinks.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(NavLinks);
