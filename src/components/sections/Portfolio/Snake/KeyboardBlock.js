import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import KeyboardKey from './KeyboardKey';


const styles = ({
    firstRowContainer: {
        display: 'flex'
    }
});

const KeyboardBlock = props => {
    const { classes, keys } = props;
    const secondRowKeys = omit(keys, [0]);

    return (
        <div>
            <div className={classes.firstRowContainer}>
                <KeyboardKey hidden />
                <KeyboardKey>{keys[0]}</KeyboardKey>
                <KeyboardKey hidden />
            </div>
            {map(secondRowKeys, (key, i) => (
                <KeyboardKey key={i}>
                    {key}
                </KeyboardKey>
            ))}
        </div>
    );
};

KeyboardBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    keys: PropTypes.arrayOf(PropTypes.any)
};

export default withStyles(styles)(KeyboardBlock);
