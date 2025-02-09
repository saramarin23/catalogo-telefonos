import '@testing-library/jest-dom';
import { vi, describe, it, expect } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PhoneList from '../views/PhoneListView';
import { fetchAllProducts } from '../services/api';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../services/api', async () => ({
  fetchAllProducts: vi.fn(),
}));

const mockProducts = [
  { id: 1, name: 'Phone 1', brand: 'Samsung' },
  { id: 2, name: 'Phone 2', brand: 'Samsung' },
  { id: 3, name: 'Phone 3', brand: 'Samsung' },
];

const renderPhoneListComponent = async () => {
  vi.clearAllMocks();
  fetchAllProducts.mockResolvedValue(mockProducts);

  render(
    <MemoryRouter>
      <PhoneList />
    </MemoryRouter>,
  );

  await waitFor(() => {
    expect(screen.getByText('PHONE 1')).toBeInTheDocument();
  });
};

describe('PhoneList', () => {
  it('renders products after fetching data', async () => {
    await renderPhoneListComponent();
    expect(screen.getByText('PHONE 2')).toBeInTheDocument();
    expect(screen.getByText('PHONE 3')).toBeInTheDocument();
  });

  it('filters products when the user writes in the searchbar', async () => {
    await renderPhoneListComponent();

    const searchInput = screen.getByPlaceholderText(
      'Search for a smartphone...',
    );

    fireEvent.change(searchInput, { target: { value: 'Phone 1' } });

    await waitFor(() => {
      expect(screen.getByText('PHONE 1')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText('PHONE 2')).not.toBeInTheDocument(),
        { timeout: 2000 };
      expect(screen.queryByText('PHONE 3')).not.toBeInTheDocument(),
        { timeout: 2000 };
    });
  });
});
