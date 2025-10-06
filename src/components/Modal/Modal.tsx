import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ModalProps } from './interface';
import { Overlay, ModalContainer, ModalHeader, ModalTitle, CloseButton, ModalBody, ModalImage, ModalContent } from './elements';

export function Modal({ open, onClose, title, imageSrc, children }: ModalProps) {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!open && !isClosing) return null;

  return (
    <Overlay open={open} onClick={handleOverlayClick}>
      <ModalContainer isClosing={isClosing}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={handleClose} aria-label="Close modal">
            ×
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {imageSrc && <ModalImage src={imageSrc} alt={title} />}
          <ModalContent>{children}</ModalContent>
        </ModalBody>
      </ModalContainer>
    </Overlay>
  );
}


function Demo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: '40px', fontFamily: 'var(--font-inter)' }}>
      <button
        onClick={() => setModalOpen(true)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.4px',
        }}
      >
        Read More
      </button>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="FAMILY PETITION & ADJUSTMENT OF STATUS"
        imageSrc="/image.webp"
      >
        <p>
          Our experienced immigration teams provide comprehensive assistance with family-based 
          immigration petitions and adjustment of status applications. We guide you through every 
          step of the process to reunite families.
        </p>
        
        <h3>Services Include:</h3>
        <ul>
          <li>Immediate relative petitions (spouses, parents, children)</li>
          <li>Family preference category petitions</li>
          <li>Adjustment of status applications (Form I-485)</li>
          <li>Consular processing assistance</li>
          <li>Work authorization and travel permits</li>
        </ul>

        <h3>Why Choose Us?</h3>
        <p>
          With years of experience in immigration law, we provide personalized service and expert 
          guidance. We understand the complexities of family immigration and work diligently to 
          ensure your case is handled with care and professionalism.
        </p>

        <p>
          Contact us today to schedule a consultation and learn how we can help you achieve your 
          immigration goals.
        </p>
      </Modal>
    </div>
  );
}

export default Demo;