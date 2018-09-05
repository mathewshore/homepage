import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Container } from 'reactstrap';
import { Typography, Divider } from '@material-ui/core';


const styles = () => ({
    sectionWrapper: {
        position: 'relative',
    },
    sectionContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '40px 20px',
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0,
    }
});

class Section extends Component {
    render() {
        const { classes, children, id } = this.props;

        let sectionPadding = '20px 0';
        if (['about', 'contact'].includes(id)) {
            sectionPadding = id === 'about' ? '40px 0 20px' : '20px 0 40px';
        }

        return (
            <div
                id={id}
                className={classes.sectionWrapper}
                style={{
                    background: this.props.background || 'white',
                    padding: sectionPadding,
                }}
            >
                <Container className={classes.container}>
                    <div className={classes.sectionContent}>
                        <Typography variant='display2'>
                            {id.toUpperCase()}
                        </Typography>
                        <Divider />
                        {children}
                    </div>
                </Container>
            </div>
        );
    }
}

Section.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.element,
    id: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Section);
