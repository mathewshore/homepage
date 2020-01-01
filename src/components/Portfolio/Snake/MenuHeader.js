import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing, breakpoints }) => ({
    typographyRoot: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        [breakpoints.up('xs')]: {
            marginBottom: spacing.unit * 2
        }
    },
});

const MenuHeader = props => {
    const { classes } = props;
    return (
        <Typography
            {...omit(props, ['classes'])}
            classes={{ root: classes.typographyRoot }}
        />
    )
};

MenuHeader.defaultProps = {
    variant: 'display1'
};

MenuHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    variant: PropTypes.string,
    children: PropTypes.any
};

export default withStyles(styles)(MenuHeader);
