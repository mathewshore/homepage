import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-scroll';
import TextHeader from '../common/TextHeader';
import { SECTIONS } from '../constants';


const styles = ({ palette }) => ({
    logoContainer: {
        cursor: 'pointer',
        transition: 'all 0.3s',
        textDecoration: 'none',
        color: palette.text.header.light,

        '&:hover': {
            color: palette.primary.light,
        },
    },
    logoText: {
        color: 'inherit',

        '&:hover': {
            color: 'inherit',
        },
    }
});


const NavLogo = props => {
    const { classes } = props;

    return (
        <div className={classes.logoContainer}>
            <Link to={SECTIONS.INTRO} smooth>
                <TextHeader
                    variant="display1"
                    text="MATIAS RANTA"
                    typographyClassName={classes.logoText}
                />
            </Link>
        </div>
    );
};

NavLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavLogo);
