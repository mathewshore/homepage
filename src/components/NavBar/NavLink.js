import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import spacing from '@material-ui/core/styles/spacing';
import { Link } from 'react-scroll';
import TextHeader from '../common/TextHeader';


const styles = ({ spacing, palette }) => ({
    container: {
        display: 'block',
        cursor: 'pointer',
        textTransform: 'uppercase',
        margin: `0 ${spacing.unit * 2}px`,
        color: palette.text.header.light,
        transition: 'all 0.3s ease',
        '&:last-of-type': {
            marginRight: 0
        },
        '&.mobile': {
            margin: 0,
            textAlign: 'right'
        },
        '&:hover': {
            color: palette.primary.main,
            textDecoration: 'none',
            transform: 'scale(1.1)',
            '&.mobile': {
                transform: 'scale(1)'
            }
        },
        '&.active': {
            color: palette.primary.light,
            transform: 'scale(1.1)',
            '&.mobile': {
                transform: 'scale(1)'
            }
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

const NavLink = props => {
    const { classes } = props;
    const containerClassNames = [classes.container];
    const textHeaderClassNames = [classes.navLinkTypography];

    if (props.isActive) {
        containerClassNames.push('active');
    }
    if (props.isMobile) {
        containerClassNames.push('mobile');
        textHeaderClassNames.push('mobile');
    }

    const scrollOffset = spacing.unit * (props.first ? -3 : -10);
                
    return (
        <div className={join(containerClassNames, ' ')}>
            <Link
                smooth
                to={props.linkTo}
                className={classes.link}
                offset={scrollOffset}
            >
                <TextHeader
                    variant="subheading"
                    text={props.text}
                    typographyClassName={join(textHeaderClassNames, ' ')}
                />
            </Link>
        </div>
    );
};

NavLink.propTypes = {
    classes: PropTypes.object.isRequired,
    first: PropTypes.bool,
    linkTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styles)(NavLink);
