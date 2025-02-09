import '@testing-library/jest-dom';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as cartContext from '../context/CartContext';
import CartView from '../views/CartView';

vi.spyOn(cartContext, 'useCart').mockReturnValue({
  cartItems: [
    {
      id: '1',
      name: 'IPHONE 13',
      storage: { capacity: '256GB', price: 999 },
      color: { name: 'RED', imageUrl: 'iPhone 13.jpg' },
    },
    {
      id: '2',
      name: 'SAMSUNG S24',
      storage: { capacity: '256GB', price: 599 },
      color: { name: 'BLACK', imageUrl: 'Samsung S24' },
    },
  ],
  removeFromCart: vi.fn(),
});

describe('Cart', () => {
  it('displays the right number of items in the cart', () => {
    render(
      <MemoryRouter>
        <CartView />
      </MemoryRouter>,
    );

    expect(screen.getByText(/CART \(2\)/i)).toBeInTheDocument();
  });

  it('displays continue shopping button', () => {
    render(
      <MemoryRouter>
        <CartView />
      </MemoryRouter>,
    );

    expect(screen.getByText('CONTINUE SHOPPING')).toBeInTheDocument();
  });
});
