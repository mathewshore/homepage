import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import NavLink from './NavLink';


const styles = ({ spacing, palette }) => ({
    navLinksContainer: {
        marginTop: spacing.unit * 0.5,
        marginLeft: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    }
});

const NavLinks = props => {
    const { classes } = props;
    // ToDo: refactor this to render links as props.children

    return (
        <div className={classes.navLinksContainer}>
            {map(props.sectionIds, (id, i) => (
                <NavLink
                    first={i === 0}
                    key={id}
                    linkTo={id}
                    text={id}
                    isActive={id === props.activeSection}
                />
            ))}
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
