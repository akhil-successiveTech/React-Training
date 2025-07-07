import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={styles.overlay}
    >
      <div style={styles.modal}>
        {children}
        <button
          onClick={onClose}
          style={styles.closeButton}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',  // add some padding for small screens
    zIndex: 1000, // keep modal on top
  },
  modal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    minWidth: '320px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '90vw',
  },
  closeButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600',
  }
};

export default Modal;