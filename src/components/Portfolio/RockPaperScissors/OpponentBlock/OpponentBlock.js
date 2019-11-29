import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import pick from 'lodash/pick';

import PlayerBlock from '../PlayerBlock';
import tools from '../tools';
import OpponentBlockContent from './OpponentBlockContent';


const OpponentBlock = props => (
    <PlayerBlock title="Opponent">
        <OpponentBlockContent
            {...pick(props, [
                'animationToggled',
                'opponentTool'
            ])}
        />
    </PlayerBlock>
);

OpponentBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    animationToggled: PropTypes.bool,
    opponentTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default OpponentBlock;
