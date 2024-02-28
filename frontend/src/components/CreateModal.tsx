"use client"
import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;


`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 618px;
  background: rgb(0,202,255);
  background: linear-gradient(144deg, rgba(0,202,255,0.01) 0%, rgba(0,8,20,1) 0%, rgba(0,30,77,1) 100%);
`;


export const CreateModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};