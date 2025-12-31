import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders object state demos', () => {
  const { getByText } = render(<App />);
  expect(getByText(/class component/i)).toBeInTheDocument();
  expect(getByText(/functional component with hooks/i)).toBeInTheDocument();
});
