import React from 'react';
import PropTypes from 'prop-types';

import { GITHUB_PROFILE_URL } from '../../constants';
import GitHubIcon from './GitHubIcon';
import SocialMediaLink from './SocialMediaLink';


const GitHubLink = props => (
    <SocialMediaLink href={props.url}>
        <GitHubIcon />
    </SocialMediaLink>
);

GitHubLink.defaultProps = {
    url: GITHUB_PROFILE_URL
};

GitHubLink.propTypes = {
    url: PropTypes.string.isRequired
};

export default GitHubLink;
