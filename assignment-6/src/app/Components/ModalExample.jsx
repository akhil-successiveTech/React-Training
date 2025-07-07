import React, { useState } from 'react';
import Modal from './Modal';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: '1rem',
      }}
    >
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '18px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: '600',
          boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
};

export default ModalExample;