import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import MuiModal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import { toggleBodyScroll } from '../../utils';
import Container from '../Container';
import ModalHead from './ModalHead';
import ModalContent from './ModalContent';


const styles = ({ spacing, breakpoints }) => ({
    modalPaper: {
        position: 'relative',
        height: `calc(100vh - ${spacing.unit * 5 * 2}px)`,
        overflow: 'auto',
        margin: `${spacing.unit * 5}px 0`,
        padding: `0 ${spacing.unit * 5}px`,

        [breakpoints.down('md')]: {
            padding: `0 ${spacing.unit * 3}px`,
            margin: `${spacing.unit * 3}px 0`,
            height: `calc(100vh - ${spacing.unit * 3 * 2}px)`,
        },
        [breakpoints.down('sm')]: {
            padding: `0 ${spacing.unit * 1.5}px`,
            margin: `${spacing.unit * 1.5}px 0`,
            height: `calc(100vh - ${spacing.unit * 1.5 * 2}px)`,
        },
        [breakpoints.down('xs')]: {
            margin: 0,
            height: '100vh'
        },
    },
});

class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        toggleBodyScroll();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
        toggleBodyScroll();
    }

    handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            this.props.onClose();
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiModal
                open
                disableAutoFocus
                onClose={this.props.onClose}
            >
                <Container>
                    <Paper classes={{ root: classes.modalPaper }} elevation={10}>
                        <ModalHead
                            title={this.props.title}
                            description={this.props.description}
                            onClose={this.props.onClose}
                        />
                        <ModalContent>
                            {this.props.children}
                        </ModalContent>
                    </Paper>
                </Container>
            </MuiModal>
        );
    }
}

Modal.propTypes = {
    classes: PropTypes.object,
    onClose: PropTypes.func,
    children: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Modal);
