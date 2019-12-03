import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import pick from 'lodash/pick';

import PlayerBlock from '../PlayerBlock';
import ToolContainer from '../ToolContainer';
import tools from '../tools';
import OpponentBlockContent from './OpponentBlockContent';


const Opponent = props => (
    <PlayerBlock title="Opponent">
        <ToolContainer>
            <OpponentBlockContent
                {...pick(props, [
                    'animationToggled',
                    'opponentTool'
                ])}
            />
        </ToolContainer>
    </PlayerBlock>
);

Opponent.propTypes = {
    animationToggled: PropTypes.bool,
    opponentTool: PropTypes.oneOf([null, ...map(tools, 'value')])
};

export default Opponent;
