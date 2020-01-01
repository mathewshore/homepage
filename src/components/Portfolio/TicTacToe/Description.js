import React from 'react';
import Typography from '@material-ui/core/Typography';
import DescriptionContainer from '../../common/DescriptionContainer';


const Description = props => {
    return (
        <DescriptionContainer>
            <Typography>
                I wanted to create something simple but also interactive and
                visually pleasing. What's a better challenge for case like
                this than 3x3 grid labeled TicTacToe! I wanted the grid buttons
                to look like users would want to press them so bad that they
                can't stop themselves before it's too late. Also, the feel of
                pressing the button needed to be something which makes users
                want to press rest of the buttons. I hope to have accomplished
                this with some ripple animation effects and playing with of the
                elevation of the button using some element shadow effects.
            </Typography>
        </DescriptionContainer>
    )
};

Description.propTypes = {

};

export default Description;
