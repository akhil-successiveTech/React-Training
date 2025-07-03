'use client';
import React, { useState } from 'react';
import Modal from '../Components/Modal';

export default function HomePage() {
  // Check the condition that is it open or not
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
      }}
    >
      {/* Button to open the modal */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#2563eb',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Open Modal
      </button>

        {/* Sended the content to display to the modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.5rem' }}>
          Basic Modal 
        </h2>
        <p style={{ margin: 0, fontSize: '1rem', color: '#333' }}>
          This is a simple modal without any portal or external libraries.
        </p>
      </Modal>
    </div>
  );
}