import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import split from 'lodash/split';
import size from 'lodash/size';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    wordWrapper: {
        marginRight: theme.spacing.unit,

        '&:last-of-type': {
            marginRight: 0,
        },
    },
    remainingLetters: {
        '&.display3': {
            fontSize: 40,
        },
        '&.display2': {
            fontSize: 36,
        },
        '&.display1': {
            fontSize: 28,
        },
        '&.subheading': {
            fontSize: 14,
        },
    }
});


const getFormattedText = (text, props) => map(split(text, ' '), (word, i) => {
    const { classes, variant, className } = props;
    const firstLetter = word.substring(0, 1);
    const remainingLetters = word.substring(1, (size(word)));
    const remainingLettersClass = `${classes.remainingLetters} ${variant}`
    const wordWrapperClass = `${classes.wordWrapper}${className ? ` ${className}` : ''}`;

    return (
        <span key={i} className={wordWrapperClass}>
            {firstLetter}<span className={remainingLettersClass}>{remainingLetters}</span>
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
