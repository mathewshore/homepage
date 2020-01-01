import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import { GitHubIcon } from '../SocialMediaLinks'


const styles = ({ spacing, breakpoints }) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: spacing.unit * 0.5,
        marginBottom: spacing.unit * 0.75,
    },
    buttonRoot: {
        padding: `${spacing.unit * 1.5}px ${spacing.unit * 2}px`,
        [breakpoints.down('xs')]: {
            fontSize: 12,
            width: '100%'
        },
        [breakpoints.up('md')]: {
            padding: `${spacing.unit * 1.75}px ${spacing.unit * 3}px`,
        }
    },
    gitHubIcon: {
        marginLeft: spacing.unit,
        marginTop: -spacing.unit * 0.25
    },
    itemTitle: {
        fontWeight: 'bold',
        margin: `0px ${spacing.unit * 0.5}px`
    }
});

const PortfolioFooterContent = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Button
                {...omit(props, ['classes', 'itemTitle'])}
                classes={{ root: classes.buttonRoot }}
            >
                <span className={classes.itemTitle}>
                    {props.itemTitle}
                </span>
                in
                <span className={classes.itemTitle}>
                    GitHub
                </span>
                <GitHubIcon className={classes.gitHubIcon} />
            </Button>
        </div>
    );
};

PortfolioFooterContent.defaultProps = {
    component: 'a',
    target: '_blank',
    variant: 'outlined',
    disableTouchRipple: true,
    disableFocusRipple: true
};

PortfolioFooterContent.propTypes = {
    itemTitle: PropTypes.string,
    IconButtonProps: PropTypes.object
};

export default withStyles(styles)(PortfolioFooterContent);
