"use client";
import { XCircle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
        <XCircle
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-500 cursor-pointer"
          size={28}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
