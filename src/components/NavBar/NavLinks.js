import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-scroll';
import TextHeader from '../common/TextHeader';


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
        transition: 'all 0.3s',

        '&.light': {
            color: theme.palette.text.header.light,
        },
        '&.dark': {
            color: theme.palette.text.dark,
        },
        '&:hover': {
            color: theme.palette.primary.light,
            textDecoration: 'none',
        },
        '&.active': {
            color: theme.palette.primary.main
        },
    },
    navLinkTypography: {
        display: 'initial'
    },
});

class NavLinks extends Component {
    render() {
        // ToDo: highlight active section link.
        const { classes } = this.props;

        return (
            <div className={classes.navLinksContainer}>
                {map(this.props.sectionIds, (id, i) => (
                    <div key={id} className={classes.navLink}>
                        <Link to={id} smooth>
                            <TextHeader
                                variant="subheading"
                                text={id}
                                className={`${classes.navLinkText}${this.props.activeSection === id ? ' active' : ''}${this.props.withDarkLinks ? ' dark' : ' light'}`}
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
    classes: PropTypes.object.isRequired,
    sectionIds: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(NavLinks);
