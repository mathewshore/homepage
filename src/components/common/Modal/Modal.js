import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import MuiModal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import { toggleBodyScroll } from '../../utils';
import Container from '../Container';
import ModalHead from './ModalHead';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';


const styles = {
    modalPaper: {
        position: 'relative',
        height: '100vh',
        overflow: 'auto',
    }
};

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
        const { classes, ModalFooterContent } = this.props;

        return (
            <MuiModal
                open
                disableAutoFocus
                onClose={this.props.onClose}
            >
                <Container>
                    <Paper
                        classes={{ root: classes.modalPaper }}
                        elevation={10}
                    >
                        <ModalHead
                            title={this.props.title}
                            description={this.props.description}
                            onClose={this.props.onClose}
                        />
                        <ModalContent>
                            {this.props.children}
                        </ModalContent>
                        {ModalFooterContent && (
                            <ModalFooter verticalSpacing="dense">
                                {this.props.ModalFooterContent}
                            </ModalFooter>
                        )}
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
    description: PropTypes.string,
    ModalFooterContent: PropTypes.any
};

export default withStyles(styles)(Modal);
