import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalExample from './ModalExample';

describe('Modal component', () => {
  test('modal opens and closes correctly', () => {
    render(<ModalExample />);

    // Modal should not be in the document initially
    expect(screen.queryByText(/modal content/i)).not.toBeInTheDocument();

    // Click to open modal
    fireEvent.click(screen.getByText(/open modal/i));

    // Modal should now be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();

    // Click to close modal
    fireEvent.click(screen.getByText(/close/i));

    // Modal should be removed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});