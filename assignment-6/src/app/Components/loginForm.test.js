import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('LoginForm submits username and password', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const usernameInput = screen.getByLabelText('Username:');
  const passwordInput = screen.getByLabelText('Password:');
  const submitButton = screen.getByText('Login');

  fireEvent.change(usernameInput, { target: { value: 'user123' } });
  fireEvent.change(passwordInput, { target: { value: 'pass123' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'user123',
    password: 'pass123',
  });
});