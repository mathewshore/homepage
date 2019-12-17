import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-scroll';
import TextHeader from '../common/TextHeader';
import { SECTIONS } from '../constants';


const styles = ({ palette, spacing }) => ({
    logoContainer: {
        cursor: 'pointer',
        textDecoration: 'none',
    },
    logoText: {
        transition: 'all 0.3s ease',
        color: palette.text.header.light,

        '&:hover': {
            color: palette.primary.light,
        },
        '&.dense': {
            transform: 'scale(0.9)',
            marginLeft: -spacing.unit * 1.5
        }
    }
});


const NavLogo = props => {
    const { classes } = props;
    const logoTextClassNames = [classes.logoText];
    if (props.dense) {
        logoTextClassNames.push('dense');
    }

    return (
        <div className={classes.logoContainer}>
            <Link to={SECTIONS.INTRO} smooth>
                <TextHeader
                    variant="display1"
                    text="MATIAS RANTA"
                    typographyClassName={join(logoTextClassNames, ' ')}
                />
            </Link>
        </div>
    );
};

NavLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavLogo);
