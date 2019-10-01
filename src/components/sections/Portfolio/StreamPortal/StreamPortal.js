import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextLink from '../../../common/TextLink';
import images from './images';


const styles = ({ spacing }) => ({
    container: {
        display: 'flex'
    },
    link: {
        margin: `0px ${spacing.unit * 0.75}px`,
    },
    landingPageImage: {
        width: '100%'
    },
    typography: {
        marginTop: spacing.unit
    }
});

const StreamPortal = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item sm={12} md={4}>
                    <Typography variant="body2">
                        Stream Portal is my demo web app project for calling external APIs
                        and rendering live data in single page application architecture. The longterm
                        idea is to combine multiple streaming platforms and have only one website for
                        viewing streams. To showcase this, I've plugged in
                        <TextLink className={classes.link} href="https://dev.twitch.tv/">
                            Twitch API
                        </TextLink>
                        to fetch data asynchronously from Twitch streaming plarform.
                    </Typography>
                    <Typography className={classes.typography}>
                        Some tools I've used in the project:
                        <ul>
                            <li>React</li>
                            <li>Axios</li>
                            <li>Material UI</li>
                            <li>Planning to add Unstated for state handling</li>
                        </ul>
                    </Typography>
                    <Typography variant="body2" className={classes.typography}>
                        If you're more interested in the project check out the
                        <TextLink
                            className={classes.link}
                            href="https://github.com/madzesu/stream-portal"
                        >
                            source code
                        </TextLink>
                        from Github.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={8}>
                    <img
                        className={classes.landingPageImage}
                        src={images[0].src}
                        alt="stream-portal landing page"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(StreamPortal);
