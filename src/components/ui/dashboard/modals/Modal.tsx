import React, { ReactNode } from 'react';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  action?: () => void;
  backAction?: () => void;
  children: ReactNode;
  title?: string;
  hasFooter: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, action = () => { }, backAction = () => { }, hasFooter }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div
        className="absolute inset-0 bg-black-modal bg-opacity-50"
        onClick={onClose}
      />

      <div className="bg-white rounded-2xl shadow-lg z-10 relative w-[95%] sm:w-11/12 sm:max-w-[550px] max-h-[90vh]">
        <ModalHeader title={title} onClose={onClose} />

        <div className="px-8 py-5 max-h-[65vh] overflow-scroll">
          {children}
        </div>

        {hasFooter && <ModalFooter backAction={backAction} forwardAction={action} />}
      </div>
    </div>
  );
};

export default Modal;
