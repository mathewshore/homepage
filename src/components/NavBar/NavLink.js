import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-scroll';
import TextHeader from '../common/TextHeader';


const styles = ({ spacing, palette }) => ({
    navLink: {
        display: 'block',
        cursor: 'pointer',
        textTransform: 'uppercase',
        margin: `0 ${spacing.unit * 2}px`,
        color: palette.text.header.light,
        transition: 'transform 0.3s ease',
        '&:last-of-type': {
            marginRight: 0
        },
        '&.mobile': {
            margin: 0,
            textAlign: 'center'
        },
        '&:hover': {
            color: palette.secondary.main,
            textDecoration: 'none',
            transform: 'scale(1.1)'
        },
        '&.active': {
            color: palette.secondary.light,
            transform: 'scale(1.1)'
        },
    },
    link: {
        display: 'block',
    },
    navLinkText: {
        cursor: 'pointer',
        transition: 'all 0.3s',
        
    },
    navLinkTypography: {
        display: 'inherit',
        color: 'inherit',
        '&.mobile': {
            padding: `${spacing.unit * 0.5}px ${spacing.unit * 2}px`,
        }
    },
});

const getNavLinkAdditionalClasses = (isActive, withDarkColor) => {
    const additionalClasses = [' '];
    const textColorClass = withDarkColor ? 'dark' : 'light';
    additionalClasses.push(textColorClass);
    if (isActive) {
        additionalClasses.push('active');
    }
    return join(additionalClasses, ' ');
};

const NavLink = props => {
    const { classes, isMobile, linkTo, isActive } = props;
    const additionalClasses = getNavLinkAdditionalClasses(
        isActive,
        props.withDarkColor
    );
                
    return (
        <div className={`${classes.navLink}${isMobile ? ' mobile' : ''}${additionalClasses}`}>
            <Link to={linkTo} smooth className={classes.link}>
                <TextHeader
                    variant="subheading"
                    text={props.text}
                    className={`${classes.navLinkText}${additionalClasses}`}
                    typographyClassName={`${classes.navLinkTypography}${isMobile ? ' mobile' : ''}`}
                />
            </Link>
        </div>
    );
};

NavLink.propTypes = {
    classes: PropTypes.object.isRequired,
    linkTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    activeSection: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string
    ])
};

export default withStyles(styles, { withTheme: true })(NavLink);
