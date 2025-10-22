import React from 'react';
import { Modal as BootstrapModal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Modal = ({ isOpen, toggle, title, children, onConfirm }) => {
    return (
        <BootstrapModal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                <Button color="primary" onClick={onConfirm}>Confirm</Button>
            </ModalFooter>
        </BootstrapModal>
    );
};

export default Modal;