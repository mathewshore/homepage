import React from 'react';
import Typography from '@material-ui/core/Typography';
import DescriptionContainer from '../../common/DescriptionContainer';


const Description = props => {
    return (
        <DescriptionContainer>
            <Typography>
                Add description
            </Typography>
        </DescriptionContainer>
    )
};

Description.propTypes = {

};

export default Description;
