import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={closeStyle}>✕</button>
        {children}
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
  background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center',
  alignItems: 'center', zIndex: 1000
};

const modalStyle = {
  background: 'white', padding: '20px', borderRadius: '4px',
  maxWidth: '90%', maxHeight: '90%', position: 'relative'
};

const closeStyle = {
  position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'
};