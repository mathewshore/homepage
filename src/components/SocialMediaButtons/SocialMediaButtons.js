import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import GitHubIconButton from './GitHubIconButton';
import LinkedInIconButton from './LinkedInIconButton';
import WordPressIconButton from './WordPressIconButton';


const styles = theme => ({
    socialMediaButtonsContainer: {
        display: 'flex',
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        left: theme.spacing.unit * 4,
        color: 'white',
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
