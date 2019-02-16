import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import TextHeader from '../../common/TextHeader';


const styles = theme => ({
    textContainer: {
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
            minWidth: '100%',
            marginTop: theme.spacing.unit * 3
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'initial',
            minWidth: 'auto',
            marginTop: 0
        },
    },
    textPhrase: {
        fontSize: 22,
    },
    dividerRoot: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

const IntroText = props => {
    const { classes } = props;
    return (
        <div className={classes.textContainer}>
            <TextHeader variant="display3" text="MATIAS RANTA" />
            <TextHeader variant="display1" text="SOFTWARE DEVELOPER" />
            <Divider classes={{ root: classes.dividerRoot }}/>
            <Typography variant="display1" classes={{ root: classes.textPhrase }}>
                PIXEL PERFECTIONIST & DOG LOVER
            </Typography>
        </div>
    );
};

IntroText.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(IntroText);