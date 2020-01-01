import React from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';
import MenuButton from './MenuButton';
import ViewContainer from './ViewContainer';


const ControlsView = props => {
    return (
        <ViewContainer>
            <div>
                <Controls />
                <MenuButton onClick={props.onBackClick}>
                    Back
                </MenuButton>
            </div>
        </ViewContainer>
    )
};

ControlsView.propTypes = {
    onBackClick: PropTypes.func
};

export default ControlsView;
