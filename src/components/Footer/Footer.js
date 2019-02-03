import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import SocialMediaButtons from '../SocialMediaButtons';


const styles = theme => ({
    footer: {
        position: 'relative',
        background: theme.palette.background.footer,
        padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 16.5}px`,
        color: 'white',
        textAlign: 'center',
    },
    footerContentRow: {
        padding: `${theme.spacing.unit * 2}px 0`,
        '&.socialMediaButtonsContainer': {
            display: 'flex',
        },
    }
});

class Footer extends Component {
    static renderCopyrightText() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return `Copyright © ${currentYear} Matias Ranta. All rights reserved.`;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footer}>
                <div className={classes.footerContentRow + ' socialMediaButtonsContainer'}>
                    <SocialMediaButtons />
                </div>
                <div className={classes.footerContentRow}>
                    {Footer.renderCopyrightText()}
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Footer);
