import React from 'react';
import PictureViewer from '../../../common/PictureViewer';
import testImg from '../../../../bg_intro.jpg';


const images = [
    {
        src: testImg,
        alt: 'test alt',
        title: 'testTitle',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg,
        alt: 'test alt2',
        title: 'testTitle2',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg,
        alt: 'test alt3',
        title: 'testTitle3',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg,
        alt: 'test alt4',
        title: 'testTitle4',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg,
        alt: 'test alt5',
        title: 'testTitle5',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
];

const Flexer = () => <PictureViewer images={images} />;

export default Flexer;
