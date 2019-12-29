import React, { Component } from 'react';
import PropTypes from 'prop-types';

import join from 'lodash/join';
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
            marginTop: '2vh'
        },
        [breakpoints.up('md')]: {
            textAlign: 'initial',
            minWidth: 'auto',
            marginTop: 0
        }
    },
    textPhrase: {
        minHeight: spacing.unit * 5,
        fontSize: 22,
        transition: 'all 0.3s ease',
        '&.animated': {
            fontSize: 28,
            color: 'transparent'
        },
        [breakpoints.down('sm')]: {
            fontSize: 16,
            '&.animated': {
                fontSize: 24
            }
        }
    },
    dividerRoot: {
        [breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
});

const PHRASE_INTERVAL_TIME = 4000;

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

    phraseChangeInterval = undefined;

    phraseAnimationInterval = undefined;

    componentDidMount = () => {
        this.activateIntervals();
    };

    activateIntervals = () => {
        this.setPhraseChangeInterval();
        this.setPhraseAnimationInterval();
    };

    setPhraseChangeInterval = (interval = PHRASE_INTERVAL_TIME) => {
        setTimeout(() => {
            this.phraseChangeInterval = setInterval(this.changePhrase, interval);
        }, 500);
    };

    changePhrase = () => {
        const phraseCount = size(textPhrases);
        const currentIsLast = (this.state.phraseIndex + 1) === phraseCount;
        const phraseIndex = currentIsLast ? 0 : this.state.phraseIndex + 1;
        this.setState({ phraseIndex, phraseIsChanging: false });
    };

    setPhraseAnimationInterval = (interval = PHRASE_INTERVAL_TIME) => {
        this.phraseAnimationInterval = setInterval(this.setPhraseAnimation, interval)
    };

    setPhraseAnimation = () => {
        this.setState({ phraseIsChanging: true });
    };

    componentWillUnmount = () => {
        this.clearInvervals();
    };

    clearInvervals = () => {
        clearInterval(this.phraseChangeInterval);
        clearInterval(this.phraseAnimationInterval);
    };

    render() {
        const { classes } = this.props;
        const phraseClassNames = [classes.textPhrase];
        if (this.state.phraseIsChanging) {
            phraseClassNames.push('animated');
        }
    
        return (
            <div className={classes.textContainer}>
                <TextHeader
                    variant="display3"
                    text="MATIAS RANTA"
                />
                <TextHeader
                    variant="display1"
                    text="SOFTWARE DEVELOPER"
                />
                <Divider classes={{ root: classes.dividerRoot }} />
                <Typography
                    variant="display1"
                    classes={{ root: join(phraseClassNames, ' ') }}
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