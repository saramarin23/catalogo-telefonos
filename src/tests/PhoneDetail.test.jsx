import PhoneDetail from '../views/PhoneDetailView';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import * as cartContext from '../context/CartContext';
import * as api from '../services/api';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../services/api', () => ({
  fetchProductById: vi.fn(),
}));

const mockProduct = {
  id: '1',
  name: 'IPHONE 13',
  basePrice: '999',
  brand: 'Apple',
  colorOptions: [{ name: 'black', imageUrl: 'black.png' }],
  storageOptions: [{ capacity: '128GB', price: '799' }],
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.spyOn(api, 'fetchProductById').mockResolvedValue(mockProduct);

  vi.spyOn(cartContext, 'useCart').mockResolvedValue({
    addToCart: vi.fn(),
  });
});

describe('PhoneDetail', () => {
  it('Shows data', async () => {
    render(
      <MemoryRouter>
        <PhoneDetail />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('IPHONE 13')).toBeInTheDocument();
    });
  });
});
