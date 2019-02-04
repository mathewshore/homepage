import React from 'react';
import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';

// ToDo: Add proper portfolio item images.
import testImg from '../../../bg_intro.jpg';


const portfolioItems = {
    flexer: {
        img: testImg,
        title: 'Flexer',
        shortDescription: 'Flexible time management system',
        longDescription: 'Add modal description here',
        Component: Flexer,
    },
    fledge: {
        img: testImg,
        title: 'Fledge the Hedgehog',
        shortDescription: 'Mobile game for Apple phones',
        longDescription: 'Add modal description here',
        Component: () => <div>Add component here</div>,
    },
    softala: {
        img: testImg,
        title: 'Softala Course Management System',
        shortDescription: 'A web application for managing training sessions',
        longDescription: 'Add modal description here',
        Component: () => <div>Add component here</div>,
    },
    rps: {
        img: testImg,
        title: 'Rock Paper Scissors',
        shortDescription: 'A small project for testing out React and learning simplistic designing',
        longDescription: 'Add modal description here',
        Component: RockPaperScissors,
    },
    ttt: {
        img: testImg,
        title: 'Tic Tac Toe',
        shortDescription: 'A project for improving programming logic',
        longDescription: 'A practise project for improving logical approach of stuff',
        Component: TicTacToe,
    },
};

export default portfolioItems;
