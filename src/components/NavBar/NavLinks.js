import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-scroll';
import TextHeader from '../common/TextHeader';


const styles = ({ spacing, palette }) => ({
    navLinksContainer: {
        marginTop: spacing.unit * 0.5,
        width: '100%',
        textAlign: 'right',
        display: 'flex',
        justifyContent: 'flex-end',

        '&.mobile': {
            padding: `${spacing.unit}px ${spacing.unit * 2.5}px`,
            display: 'block',
            position: 'absolute',
            top: 56,
            // ToDo: set mediascreen based right position according to different paddings
            right: 0,
            width: 120,
            background: palette.background.navBar,
        }
    },
    navLink: {
        textTransform: 'uppercase',
        margin: `0 ${spacing.unit * 2}px`,
        transition: 'all 0.3s, opacity 0.2s linear',
        '&:last-of-type': {
            marginRight: 0
        },
        '&.mobile': {
            margin: 0,
        }
    },
    navLinkText: {
        cursor: 'pointer',
        transition: 'all 0.3s',

        '&.light': {
            color: palette.text.header.light,
        },
        '&.dark': {
            color: palette.text.dark,
        },
        '&:hover': {
            color: palette.secondary.main,
            textDecoration: 'none',
        },
        '&.active': {
            color: palette.secondary.light
        },
    },
    navLinkTypography: {
        display: 'initial',
        '&.mobile': {
            padding: `${spacing.unit}px ${spacing.unit * 2}px`,
        }
    },
});

const getNavLinkAdditionalClasses = (id, activeSection, withDarkLinks) => {
    const additionalClasses = [' '];
    const textColorClass = withDarkLinks ? 'dark' : 'light';
    additionalClasses.push(textColorClass);
    if (id === activeSection) {
        additionalClasses.push('active');
    }
    return join(additionalClasses, ' ');
};

const NavLinks = props => {
    const { classes, isMobile } = props;

    return (
        <div className={`${classes.navLinksContainer}${isMobile ? ' mobile' : ''}`}>
            {map(props.sectionIds, id => {
                const additionalClasses = getNavLinkAdditionalClasses(
                    id,
                    props.activeSection,
                    props.withDarkLinks
                );
                return (
                    <div key={id} className={`${classes.navLink}${isMobile ? ' mobile' : ''}`}>
                        <Link to={id} smooth>
                            <TextHeader
                                variant="subheading"
                                text={id}
                                className={`${classes.navLinkText}${additionalClasses}`}
                                typographyClassName={`${classes.navLinkTypography}${isMobile ? ' mobile' : ''}`}
                            />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

NavLinks.propTypes = {
    classes: PropTypes.object.isRequired,
    sectionIds: PropTypes.array.isRequired,
    activeSection: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string
    ])
};

export default withStyles(styles, { withTheme: true })(NavLinks);
