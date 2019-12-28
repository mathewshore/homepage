import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

import SpacingContainer from './SpacingContainer';


const styles = ({ palette, spacing }) => ({
    container: {
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 10000,
        background: palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    closeButton: {
        marginLeft: 'auto',
    },
    closeIcon: {
        fontSize: spacing.unit * 6
    },
    modalCaption: {
        marginTop: spacing.unit,
    },
});

const PortfolioViewHead = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <SpacingContainer>
                <Typography variant='display1'>
                    {props.title}
                </Typography>
                <ButtonBase
                    component={Link}
                    to={`/#${props.id}`}
                    className={classes.closeButton}
                >
                    <CloseIcon className={classes.closeIcon} />
                </ButtonBase>
            </SpacingContainer>
        </div>
    );
};

PortfolioViewHead.defaultProps = {
    id: 'portfolio'
};

PortfolioViewHead.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string
};

export default withStyles(styles)(PortfolioViewHead);