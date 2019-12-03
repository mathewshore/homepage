import RockIcon from './RockIcon';
import PaperIcon from './PaperIcon';
import ScissorsIcon from './ScissorsIcon';


const tools = [
    {
        label: 'Rock',
        value: 'rock',
        beats: 'scissors',
        looses: 'paper',
        Icon: RockIcon,
    },
    {
        label: 'Paper',
        value: 'paper',
        beats: 'rock',
        looses: 'scissors',
        Icon: PaperIcon,
    },
    {
        label: 'Scissors',
        value: 'scissors',
        beats: 'paper',
        looses: 'rock',
        Icon: ScissorsIcon,
    },
];

export default tools;
