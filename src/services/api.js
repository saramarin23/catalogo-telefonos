const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const url = new URL(`${API_URL}/products`);

export const fetchAllProducts = async (searchQuery = '') => {
  try {

    if (searchQuery.trim()) {
      url.searchParams.set('search', searchQuery);
    } else {
      url.searchParams.delete('search')
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los productos', error);
    throw error;
  }
}

export const fetchProductById = async(id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el producto', error);
    throw error;
  }
}