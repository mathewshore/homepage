import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import GitHubIconButton from './GitHubIconButton';
import LinkedInIconButton from './LinkedInIconButton';
import WordPressIconButton from './WordPressIconButton';


const styles = theme => ({
    socialMediaButtonsContainer: {
        padding: `${theme.spacing.unit * 2}px 0`,
        margin: 'auto',
    }
});

const SocialMediaButtons = (props) => (
    <div className={props.classes.socialMediaButtonsContainer}>
        <GitHubIconButton />
        <LinkedInIconButton />
        <WordPressIconButton />
    </div>
);

SocialMediaButtons.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(SocialMediaButtons);
