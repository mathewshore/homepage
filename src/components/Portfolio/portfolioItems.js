import React from 'react';

import PortfolioFooterContent from './PortfolioFooterContent';
import StreamPortal from './StreamPortal';
// import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';
import Snake from './Snake';

// import testImg from '../../bg_intro.jpg';
// import fledgeImageSrc from './portfolio_images/fledge_thumbnail_1280x720.png';
import snakeImageSrc from './portfolio_images/snake_thumbnail_1280x720.png';
import streamPortalImageSrc from './portfolio_images/stream_portal_thumbnail_1280x720.png';
import rpsImageSrc from './portfolio_images/rps_thumbnail_1280x720.png';
import tttImageSrc from './portfolio_images/tic_tac_toe_thumbnail_1280x720.png';

// todo: move this to constants
const gitUrlBase = 'https://github.com/madzesu';

const portfolioUrlBase = `${gitUrlBase}/homepage/tree/master/src/components/sections/Portfolio`

// ToDo: Add descriptive tags to portfolio items
//       e.g. Adobe Illustrator, Mobile and Flat Design for Fledge.

export const PORTFOLIO_IDS = {
    SNAKE: 'snake',
    STREAM_PORTAL: 'stream_portal',
    RPS: 'rock_paper_scissors',
    TTT: 'tic_tac_toe'
};

const portfolioItems = [
    {
        id: PORTFOLIO_IDS.SNAKE,
        title: 'Snake',
        imageSrc: snakeImageSrc,
        description: 'The old Nokia phone classic',
        Component: Snake,
        FooterContent: (
            <PortfolioFooterContent
                itemTitle="Snake"
                href={`${portfolioUrlBase}/Snake`}
            />
        )
    },
    {
        id: PORTFOLIO_IDS.STREAM_PORTAL,
        title: 'Stream Portal',
        imageSrc: streamPortalImageSrc,
        description: 'A web application for connecting streaming platforms',
        Component: StreamPortal,
        FooterContent: (
            <PortfolioFooterContent
                itemTitle="Stream Portal"
                href={`${gitUrlBase}/stream-portal`}
            />
        )
    },
    // {
    //     id: 'flexer',
    //     title: 'Flexer',
    //     imageSrc: testImg,
    //     description: 'Flexible time management system',
    //     Component: Flexer,
    //     FooterContent: (
    //         <PortfolioFooterContent
    //             itemTitle="Flexer"
    //             href="https://github.com/madzesu/flexer"
    //         />
    //     )
    // },
    // {
    //     id: 'fledge',
    //     title: 'Fledge the Hedgehog',
    //     imageSrc: fledgeImageSrc,
    //     description: 'Mobile game for Apple phones',
    //     Component: () => <div>Add component here</div>,
    //     FooterContent: (
    //         <PortfolioFooterContent
    //             itemTitle="Stream Portal"
    //             href={`${gitUrlBase}/stream-portal`}
    //         />
    //     )
    // },
    {
        id: PORTFOLIO_IDS.RPS,
        title: 'Rock Paper Scissors',
        imageSrc: rpsImageSrc,
        description: 'A small project for testing out React and learning simplistic designing',
        Component: RockPaperScissors,
        FooterContent: (
            <PortfolioFooterContent
                itemTitle="Rock Paper Scissors"
                href={`${portfolioUrlBase}/RockPaperScissors`}
            />
        )
    },
    {
        id: PORTFOLIO_IDS.TTT,
        title: 'Tic Tac Toe',
        imageSrc: tttImageSrc,
        description: 'A project for improving programming logic',
        Component: TicTacToe,
        FooterContent: (
            <PortfolioFooterContent
                itemTitle="Tic Tac Toe"
                href={`${portfolioUrlBase}/TicTacToe`}
            />
        )
    }
];

export default portfolioItems;
