import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import GitHubLink from './GitHubLink';
import LinkedInLink from './LinkedInLink';
import WordPressLink from './WordPressLink';


const styles = theme => ({
    linkContainer: {
        padding: `${theme.spacing.unit * 2}px 0`,
        margin: 'auto',
    }
});

const SocialMediaLinks = (props) => (
    <div className={props.classes.linkContainer}>
        <GitHubLink />
        <LinkedInLink />
        <WordPressLink />
    </div>
);

SocialMediaLinks.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SocialMediaLinks);
