// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NeurSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NeurSync/i);
    expect(titleElement).toBeInTheDocument();
});
