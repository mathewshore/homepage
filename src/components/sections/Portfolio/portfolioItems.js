import React from 'react';

import PortfolioModalFooterContent from './PortfolioModalFooterContent';
import StreamPortal from './StreamPortal';
import Flexer from './Flexer';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe';
import Snake from './Snake';

// ToDo: Add proper portfolio item images.
import testImg from '../../../bg_intro.jpg';
import fledgeImageSrc from './portfolio_images/fledge_thumbnail_1280x720.png';
import streamPortalImageSrc from './portfolio_images/stream_portal_thumbnail_1280x720.png';
import rpsImageSrc from './portfolio_images/rps_thumbnail_1280x720.png';
import tttImageSrc from './portfolio_images/tic_tac_toe_thumbnail_1280x720.png';


const gitUrlBase = 'https://github.com/madzesu';

const portfolioUrlBase = `${gitUrlBase}/homepage/tree/master/src/components/sections/Portfolio`

// ToDo: Add descriptive tags to portfolio items
//       e.g. Adobe Illustrator, Mobile and Flat Design for Fledge.
const portfolioItems = [
    {
        id: 'snake',
        title: 'Snake',
        imgSrc: testImg,
        shortDescription: 'The old classic, snake',
        Component: Snake
    },
    {
        id: 'stream_portal',
        title: 'Stream Portal',
        imgSrc: streamPortalImageSrc,
        shortDescription: 'A web application for connecting streaming platforms',
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
    //     imgSrc: testImg,
    //     shortDescription: 'Flexible time management system',
    //     Component: Flexer,
    //     FooterContent: (
    //         <PortfolioModalFooterContent
    //             itemTitle="Flexer"
    //             href="https://github.com/madzesu/flexer"
    //         />
    //     )
    // },
    {
        id: 'fledge',
        title: 'Fledge the Hedgehog',
        imgSrc: fledgeImageSrc,
        shortDescription: 'Mobile game for Apple phones',
        Component: () => <div>Add component here</div>,
        // FooterContent: (
        //     <div>
        //         <IconButton
        //             component="a"
        //             target="_blank"
        //             href="https://github.com/madzesu/stream-portal"
        //         >
        //             <GitHubIcon />
        //         </IconButton>
        //     </div>
        // )
    },
    {
        id: 'rps',
        title: 'Rock Paper Scissors',
        imgSrc: rpsImageSrc,
        shortDescription: 'A small project for testing out React and learning simplistic designing',
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
        imgSrc: tttImageSrc,
        shortDescription: 'A project for improving programming logic',
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
