import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import TextLink from '../../common/TextLink';
import DescriptionContainer from '../../common/DescriptionContainer';


const styles = ({ spacing }) => ({
    link: {
        margin: `0px ${spacing.unit * 0.75}px`,
    },
    typography: {
        marginTop: spacing.unit,
    }
});

const streamPortalTools = [
    'React',
    'Axios',
    'Material UI'
];

const Description = props => {
    const { classes } = props;

    return (
        <DescriptionContainer>
            <Typography>
                Stream Portal is my demo web app project for calling external APIs
                and rendering live data in single page application architecture. The longterm
                idea is to combine multiple streaming platforms and have only one website for
                viewing streams. To showcase this, I've plugged in
                <TextLink className={classes.link} href="https://dev.twitch.tv/">
                    Twitch API
                </TextLink>
                to fetch data asynchronously from Twitch streaming plarform.
            </Typography>
            <div className={classes.typography}>
                <Typography>
                    Some tools I've used in the project:
                </Typography>
                <ul>
                    {map(streamPortalTools, (tool, i) => (
                        <li key={i}>
                            <Typography>
                                {tool}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </DescriptionContainer>
    );
};

Description.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Description);
