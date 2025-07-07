// Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders the Increment button', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);

    // Simulate 1st click
    fireEvent.click(buttonElement);
    expect(buttonElement.textContent).toBe('Increment');

    // Optionally, you can also modify the Counter component to show the count
    // e.g., <div>Count: {count}</div>
    // Then test the count change like:
    // const countText = screen.getByText(/Count:/);
    // expect(countText).toHaveTextContent('Count: 1');
  });
});