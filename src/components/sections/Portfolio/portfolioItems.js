import React from 'react';
import StreamPortal from './StreamPortal';
import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';

// ToDo: Add proper portfolio item images.
import testImg from '../../../bg_intro.jpg';


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
        imgSrc: testImg,
        shortDescription: 'Mobile game for Apple phones',
        longDescription: 'Add modal description here',
        Component: () => <div>Add component here</div>,
    },
    {
        id: 'rps',
        title: 'Rock Paper Scissors',
        imgSrc: testImg,
        shortDescription: 'A small project for testing out React and learning simplistic designing',
        longDescription: 'Add modal description here',
        Component: RockPaperScissors,
    },
    {
        id: 'ttt',
        title: 'Tic Tac Toe',
        imgSrc: testImg,
        shortDescription: 'A project for improving programming logic',
        longDescription: 'A practise project for improving logical approach of stuff',
        Component: TicTacToe,
    }
];

export default portfolioItems;
