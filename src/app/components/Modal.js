import React from 'react';

import styled from 'styled-components';
import Button from "./Button";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.section`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const Modal = ({ showModal, setShowModal, children }) => {
    const closeModal = e => {
            setShowModal(false);
    };

    return (
        <>
            {showModal ? (
                        <ModalWrapper showModal={showModal}>
                            <ModalContent>
                                {children}
                                <Button onClick={closeModal}>Close</Button>
                            </ModalContent>
                        </ModalWrapper>
            ) : null}
        </>
    );
};

export default Modal