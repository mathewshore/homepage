import React from 'react';
import StreamPortal from './StreamPortal';
import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';

// ToDo: Add proper portfolio item images.
import testImg from '../../../bg_intro.jpg';
import rpsImage from './portfolio_images/rps_portfolio.png';
import tttImage from './portfolio_images/tictactoe_portfolio.png';
import fledgeImage from './portfolio_images/fledge_launchscreen_portfolio.png';


// ToDo: Add descriptive tags to portfolio items.
const portfolioItems = [
    {
        id: 'stream_portal',
        title: 'Stream Portal',
        imgSrc: testImg,
        shortDescription: 'A web application for connecting streaming platforms',
        longDescription: 'Add modal description here',
        Component: StreamPortal,
    },
    {
        id: 'flexer',
        title: 'Flexer',
        imgSrc: testImg,
        shortDescription: 'Flexible time management system',
        longDescription: 'Add modal description here',
        Component: Flexer,
    },
    {
        id: 'fledge',
        title: 'Fledge the Hedgehog',
        imgSrc: fledgeImage,
        shortDescription: 'Mobile game for Apple phones',
        longDescription: 'Add modal description here',
        Component: () => <div>Add component here</div>,
    },
    {
        id: 'rps',
        title: 'Rock Paper Scissors',
        imgSrc: rpsImage,
        shortDescription: 'A small project for testing out React and learning simplistic designing',
        longDescription: 'Add modal description here',
        Component: RockPaperScissors,
    },
    {
        id: 'ttt',
        title: 'Tic Tac Toe',
        imgSrc: tttImage,
        shortDescription: 'A project for improving programming logic',
        longDescription: 'A practise project for improving logical approach of stuff',
        Component: TicTacToe,
    }
];

export default portfolioItems;
