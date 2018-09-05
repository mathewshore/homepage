import React from 'react';

import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

import { blue, green, orange, yellow, red } from '@material-ui/core/colors';


const sections = [
    <Intro key="intro" />,
    <About
        key="about"
        sectionBackgroundColor={`linear-gradient(to bottom, ${blue[200]} 0%, ${green[200]} 100%)`}
    />,
    <Portfolio
        key="portfolio"
        sectionBackgroundColor={`linear-gradient(to bottom, ${green[200]} 0%, ${yellow[200]} 100%)`}
    />,
    <Skills
        key="skills"
        sectionBackgroundColor={`linear-gradient(to bottom, ${yellow[200]} 0%, ${orange[200]} 100%)`}
    />,
    <Contact
        key="contact"
        sectionBackgroundColor={`linear-gradient(to bottom, ${orange[200]} 0%, ${red[200]} 100%)`}
    />,
];

export default sections;
