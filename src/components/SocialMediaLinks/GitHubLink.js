import React from 'react';
import PropTypes from 'prop-types';

import GitHubIcon from './GitHubIcon';
import SocialMediaLink from './SocialMediaLink';


const GitHubLink = props => (
    <SocialMediaLink href={props.url}>
        <GitHubIcon />
    </SocialMediaLink>
);

GitHubLink.defaultProps = {
    url: 'https://github.com/madzesu'
};

GitHubLink.propTypes = {
    url: PropTypes.string.isRequired
};

export default GitHubLink;
