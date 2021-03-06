import React from 'react';
import PropTypes from 'prop-types';

import join from 'lodash/join';
import map from 'lodash/map';
import split from 'lodash/split';
import size from 'lodash/size';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FirstLetter from './FirstLetter';
import RemainingLetters from './RemainingLetters';


const styles = ({ spacing }) => ({
    wordContainer: {
        marginRight: spacing.unit,

        '&:last-of-type': {
            marginRight: 0,
        },
    }
});


const getFormattedText = (text, props) => map(split(text, ' '), (word, i) => {
    const { classes, variant } = props;
    const firstLetter = word.substring(0, 1);
    const remainingLetters = word.substring(1, (size(word)));

    const wordContainerClassNames = [classes.wordContainer];
    if (props.className) {
        wordContainerClassNames.push(props.className);
    }

    return (
        <span key={i} className={join(wordContainerClassNames, ' ')}>
            <FirstLetter variant={variant}>
                {firstLetter}
            </FirstLetter>
            <RemainingLetters variant={variant}>
                {remainingLetters}
            </RemainingLetters>
        </span>
    );
});

// ToDo: use spread operator here for props.
// ToDo: rename typegraphyClassName prop to className. 
const TextHeader = (props) => {
    const { text, variant, typographyClassName } = props;

    return (
        <Typography
            variant={variant}
            className={typographyClassName ? typographyClassName : ''}
        >
            {getFormattedText(text, props)}
        </Typography>
    );
};

TextHeader.defaultProps = {
    variant: 'display1',
};

TextHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextHeader);
