import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

import zIndex from '../zIndex';
import { toggleBodyScroll } from '../scroll_functions';


const styles = theme => ({
    closeButton: {
        float: 'right',
    },
    modalWrapper: {
        position: 'fixed',
        top: '3vh',
        left: '2%',
        width: '96%',
        height: '95vh',
        zIndex: zIndex.modal,
        backgroundColor: 'white',
        overflow: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 2px 5px 1px',
        padding: 20,
    },
    modalBackDrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: zIndex.modalBackDrop,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
});

class Modal extends Component {
    constructor() {
        super();

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        toggleBodyScroll();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
        toggleBodyScroll();
    }

    handleKeyDown(e) {
        if (e.key === 'Escape') {
            this.props.onClose();
        }
    };

    render() {
        const { classes, onClose, children, title, description } = this.props;

        return (
            <div>
                <div className={classes.modalWrapper}>
                    <IconButton className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant='display1'>
                        {title}
                    </Typography>
                    <Typography variant='caption'>
                        {description}
                    </Typography>
                    <hr />
                    {children}
                </div>
                <div onClick={onClose} className={classes.modalBackDrop} />
            </div>
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
