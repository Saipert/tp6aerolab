import axios from 'axios';

// Token que te proporcionó Aerolab
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM2ODA2NWMxMGUzZDAwMjBkMzBmMzgiLCJpYXQiOjE3MzE2MjUwNjF9.sb32GrlM6cNF76xEq5xD2Ad9kWBAXIfs6PrBexVCVm';

// Configuración de la API
const api = axios.create({
  baseURL: 'https://coding-challenge-api.aerolab.co/user/me',  // URL base de la API de Aerolab
  headers: {
    'Authorization': `Bearer ${token}`,  // El token se agrega en el encabezado
    'Content-Type': 'application/json',
  }
});

// Función para obtener los productos
export const getProducts = async () => {
  try {
    const response = await api.get('/products');  // Endpoint para obtener los productos
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

// Función para obtener la información del usuario
export const getUserData = async () => {
  try {
    const response = await api.get('/user/me');  // Endpoint para obtener la información del usuario
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};
