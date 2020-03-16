import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Footer';
import PortfolioViewContent from './PortfolioViewContent';
import PortfolioViewHead from './PortfolioViewHead';
import PortfolioViewFooter from './PortfolioViewFooter';


const PortfolioViewContainer = props => {
    useEffect(() => {
        // For some reason the view has been sometimes scrolled to the bottom.
        // Set the scroll position to top on mount.
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="view-container">
            <PortfolioViewHead
                id={props.id}
                title={props.title}
                description={props.description}
            />
            <PortfolioViewContent>
                {props.children}
            </PortfolioViewContent>
            {props.FooterContent && (
                <PortfolioViewFooter>
                    {props.FooterContent}
                </PortfolioViewFooter>
            )}
            <Footer />
        </div>
    );
};

PortfolioViewContainer.propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    FooterContent: PropTypes.element
};

export default PortfolioViewContainer;
