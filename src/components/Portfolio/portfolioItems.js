import React from 'react';

import PortfolioModalFooterContent from './PortfolioModalFooterContent';
import StreamPortal from './StreamPortal';
// import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';
import Snake from './Snake';

// ToDo: Add proper portfolio item images.
import testImg from '../../bg_intro.jpg';
// import fledgeImageSrc from './portfolio_images/fledge_thumbnail_1280x720.png';
import streamPortalImageSrc from './portfolio_images/stream_portal_thumbnail_1280x720.png';
import rpsImageSrc from './portfolio_images/rps_thumbnail_1280x720.png';
import tttImageSrc from './portfolio_images/tic_tac_toe_thumbnail_1280x720.png';

// todo: move this to constants
const gitUrlBase = 'https://github.com/madzesu';

const portfolioUrlBase = `${gitUrlBase}/homepage/tree/master/src/components/sections/Portfolio`

// ToDo: Add descriptive tags to portfolio items
//       e.g. Adobe Illustrator, Mobile and Flat Design for Fledge.

const portfolioItems = [
    {
        // ToDo: Add proper snake portfolio image.
        id: 'snake',
        title: 'Snake',
        imageSrc: testImg,
        description: 'The old Nokia phone classic',
        Component: Snake,
        FooterContent: (
            <PortfolioModalFooterContent
                itemTitle="Snake"
                href={`${portfolioUrlBase}/Snake`}
            />
        )
    },
    {
        id: 'stream_portal',
        title: 'Stream Portal',
        imageSrc: streamPortalImageSrc,
        description: 'A web application for connecting streaming platforms',
        Component: StreamPortal,
        FooterContent: (
            <PortfolioModalFooterContent
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
    //         <PortfolioModalFooterContent
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
    //         <PortfolioModalFooterContent
    //             itemTitle="Stream Portal"
    //             href={`${gitUrlBase}/stream-portal`}
    //         />
    //     )
    // },
    {
        id: 'rps',
        title: 'Rock Paper Scissors',
        imageSrc: rpsImageSrc,
        description: 'A small project for testing out React and learning simplistic designing',
        Component: RockPaperScissors,
        FooterContent: (
            <PortfolioModalFooterContent
                itemTitle="Rock Paper Scissors"
                href={`${portfolioUrlBase}/RockPaperScissors`}
            />
        )
    },
    {
        id: 'ttt',
        title: 'Tic Tac Toe',
        imageSrc: tttImageSrc,
        description: 'A project for improving programming logic',
        Component: TicTacToe,
        FooterContent: (
            <PortfolioModalFooterContent
                itemTitle="Tic Tac Toe"
                href={`${portfolioUrlBase}/TicTacToe`}
            />
        )
    }
];

export default portfolioItems;
