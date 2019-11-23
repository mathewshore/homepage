import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import size from 'lodash/size';
import toUpper from 'lodash/toUpper';

import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import TextHeader from '../common/TextHeader';


const styles = ({ breakpoints, spacing }) => ({
    textContainer: {
        [breakpoints.up('xs')]: {
            textAlign: 'center',
            minWidth: '100%',
            marginTop: spacing.unit * 3
        },
        [breakpoints.up('md')]: {
            textAlign: 'initial',
            minWidth: 'auto',
            marginTop: 0
        },
    },
    textPhrase: {
        minHeight: spacing.unit * 5,
        fontSize: 22,
        transition: 'all 0.3s ease',
        '&.animated': {
            fontSize: 28,
            color: 'transparent',
        }
    },
    dividerRoot: {
        [breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

const textPhrases = [
    'pixel perfectionist',
    'dog lover',
    'climbing enthusiast'
];

class IntroText extends Component {
    state = {
        phraseIsChanging: false,
        phraseIndex: 0
    };

    componentDidMount = () => {
        setTimeout(this.activatePhraseIntervals(4000), 500);
    };
    
    activatePhraseIntervals = phraseInterval => {
        setInterval(this.setPhraseTransition, phraseInterval)
        setTimeout(() => setInterval(this.changePhrase, phraseInterval), 500);
    };

    setPhraseTransition = () => {
        this.setState({ phraseIsChanging: true });
    };

    componentWillUnmount = () => {
        clearInterval(this.changePhrase);
    };

    changePhrase = () => {
        const phraseCount = size(textPhrases);
        const currentIsLast = (this.state.phraseIndex + 1) === phraseCount;
        const phraseIndex = currentIsLast ? 0 : this.state.phraseIndex + 1;
        this.setState({ phraseIndex, phraseIsChanging: false });
    };

    // ToDo: Add onMouseEnter & on 
    onPhraseMouseEnter = () => {
        // ToDo: Disable phrase loop.
    };

    onPhraseMouseExit = () => {
        // ToDo: Enable phrase loop again.
    };

    render() {
        const { classes } = this.props;
        // ToDo: Loop different text phrases.
    
        return (
            <div className={classes.textContainer}>
                <TextHeader variant="display3" text="MATIAS RANTA" />
                <TextHeader variant="display1" text="SOFTWARE DEVELOPER" />
                <Divider classes={{ root: classes.dividerRoot }}/>
                <Typography
                    variant="display1"
                    classes={{ root: `${classes.textPhrase}${this.state.phraseIsChanging ? ' animated' : ''}` }}
                >
                    {toUpper(get(textPhrases, this.state.phraseIndex, ''))}
                </Typography>
            </div>
        );
    }
}

IntroText.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntroText);