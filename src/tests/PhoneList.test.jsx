import '@testing-library/jest-dom';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PhoneList from '../views/PhoneListView';
import { fetchAllProducts } from '../services/api';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../services/api', async () => ({
  fetchAllProducts: vi.fn(),
}));

describe('PhoneList', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    fetchAllProducts.mockImplementation(async () => [
      { id: 1, name: 'Phone 1' },
      { id: 2, name: 'Phone 2' },
      { id: 3, name: 'Phone 3' },
    ]);
  });

  it('renders products after fetching data', async () => {
    render(
      <MemoryRouter>
        <PhoneList />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Phone 1')).toBeInTheDocument();
    });
  });

  it('filters products when the user writes in the searchbar', async () => {
    render(
      <MemoryRouter>
        <PhoneList />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Phone 1')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(
      'Search for a smartphone...',
    );

    fireEvent.change(searchInput, { target: { value: 'Phone 1' } });

    await waitFor(() => {
      expect(screen.getByText('Phone 1')).toBeInTheDocument();
    });
  });
});
