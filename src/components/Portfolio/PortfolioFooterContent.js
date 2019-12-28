import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import { GitHubIcon } from '../SocialMediaLinks'


const styles = ({ spacing }) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: spacing.unit * 0.5,
        marginBottom: spacing.unit * 0.75
    },
    gitHubIcon: {
        marginLeft: spacing.unit,
        marginTop: -spacing.unit * 0.25
    }
});

const PortfolioFooterContent = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Button {...omit(props, ['classes', 'itemTitle'])}>
                {`Source code for ${props.itemTitle}`}
                <GitHubIcon className={classes.gitHubIcon} />
            </Button>
        </div>
    );
};

PortfolioFooterContent.defaultProps = {
    component: 'a',
    target: '_blank',
    disableTouchRipple: true,
    disableFocusRipple: true
};

PortfolioFooterContent.propTypes = {
    itemTitle: PropTypes.string,
    IconButtonProps: PropTypes.object
};

export default withStyles(styles)(PortfolioFooterContent);
