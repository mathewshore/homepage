import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import spacing from '@material-ui/core/styles/spacing';
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

const getExtraClassNames = (isActive, withDarkColor) => {
    const classNames = [' '];
    const textColorClass = withDarkColor ? 'dark' : 'light';
    classNames.push(textColorClass);
    if (isActive) {
        classNames.push('active');
    }
    return join(classNames, ' ');
};

const NavLink = props => {
    const { classes, isMobile } = props;
    const additionalClasses = getExtraClassNames(props.isActive, props.withDarkColor);
    const offsetUnitTimes = props.first ? 3 : 10;
                
    return (
        <div className={`${classes.navLink}${isMobile ? ' mobile' : ''}${additionalClasses}`}>
            <Link
                smooth
                to={props.linkTo}
                className={classes.link}
                offset={spacing.unit * -offsetUnitTimes}
            >
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
    first: PropTypes.bool,
    linkTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    activeSection: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string
    ])
};

export default withStyles(styles, { withTheme: true })(NavLink);
