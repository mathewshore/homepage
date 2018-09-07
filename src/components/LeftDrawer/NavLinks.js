import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';


const navLinks = ['intro', 'about', 'portfolio', 'contact'];

const LINK_RENDER_TIME = 50; // ms
export const LINK_BlOCK_UNMOUNT_DELAY = navLinks.length * LINK_RENDER_TIME + 200; // 200 = transition delay

const styles = theme => ({
    navLinksWrapper: {
        padding: `0 ${theme.spacing.unit * 9}px`,
        marginTop: theme.spacing.unit * 7.5,
    },
    navLink: {
        textTransform: 'uppercase',
        display: 'block',
        margin: `${theme.spacing.unit * 3}px 0`,

        transition: 'all 0.3s, opacity 0.2s linear',
        opacity: 0,
        color: 'white',

        '&.enter': {
            opacity: 1,
        },
        '&:hover': {
            color: 'purple',
            textDecoration: 'none',
        },
    },
});

class NavLinks extends Component {
    constructor() {
        super();

        const incrementIntervalId = setInterval(this.incrementNavLinkRenderIndex.bind(this), LINK_RENDER_TIME);

        this.state = {
            incrementIntervalId,
            decrementIntervalId: null,
            linkRenderCount: 0,
        };
    }

    // Todo: add window location listener and use it to highlight active section.

    componentWillUnmount() {
        clearInterval(this.state.incrementIntervalId);
        clearInterval(this.state.decrementIntervalId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.willClose) {
            const decrementIntervalId = setInterval(this.decrementNavLinkRenderIndex.bind(this), LINK_RENDER_TIME);
            this.setState({ decrementIntervalId });
        }
    }

    decrementNavLinkRenderIndex() {
        const linkRenderCount = this.state.linkRenderCount - 1;
        this.setState({ linkRenderCount });
        if (linkRenderCount === 0) {
            clearInterval(this.state.decrementIntervalId);
        }
    }

    incrementNavLinkRenderIndex = () => {
        const linkRenderCount = this.state.linkRenderCount + 1;
        this.setState({ linkRenderCount });
        if (linkRenderCount === navLinks.length) {
            clearInterval(this.state.incrementIntervalId);
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.navLinksWrapper}>
                {_.map(navLinks, (label, i) => {
                    const linkDisplayClassName = this.state.linkRenderCount >= (i + 1) ? ' enter' : '';
                    return (
                        <a
                            href={`#${label}`}
                            className={classes.navLink + linkDisplayClassName}
                            key={label}
                        >
                            {label}
                        </a>
                    );
                })}
            </div>
        );
    }
}

NavLinks.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(NavLinks);
