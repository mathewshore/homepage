import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Footer';
import PortfolioViewContent from './PortfolioViewContent';
import PortfolioViewHead from './PortfolioViewHead';
import PortfolioViewFooter from './PortfolioViewFooter';


class PortfolioViewContainer extends Component {
    componentDidMount = () => {
        // For some reason the view has been sometimes scrolled to the bottom.
        // Set the scroll position to top on mount.
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div id="view-container">
                <PortfolioViewHead
                    id={this.props.id}
                    title={this.props.title}
                    description={this.props.description}
                />
                <PortfolioViewContent>
                    {this.props.children}
                </PortfolioViewContent>
                {this.props.FooterContent && (
                    <PortfolioViewFooter>
                        {this.props.FooterContent}
                    </PortfolioViewFooter>
                )}
                <Footer />
            </div>
        )
    }
};

PortfolioViewContainer.propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    FooterContent: PropTypes.element
};

export default PortfolioViewContainer;
