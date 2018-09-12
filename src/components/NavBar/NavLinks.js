import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import TextHeader from '../utils/TextHeader';


const navLinks = ['intro', 'about', 'portfolio', 'skills', 'contact'];

const styles = theme => ({
    navLinksWrapper: {
        marginTop: theme.spacing.unit * 3,
        display: 'inline-block',
        width: '100%',
        textAlign: 'right',
    },
    navLink: {
        textTransform: 'uppercase',
        margin: `0 ${theme.spacing.unit * 2}px`,
        transition: 'all 0.3s, opacity 0.2s linear',
        display: 'inline-block',
    },
    navLinkText: {
        cursor: 'pointer',

        transition: 'all 0.3s',
        color: theme.palette.text.header.light,
        '&:hover': {
            color: 'purple',
            textDecoration: 'none',
        },
    },
    navLinkTypography: {
        display: 'initial',
    },
});

class NavLinks extends Component {
    constructor() {
        super();

        this.state = {};
    }

    // Todo: add window location listener to App and use it to highlight active link.

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.navLinksWrapper}>
                {_.map(navLinks, (linkId, i) => (
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
