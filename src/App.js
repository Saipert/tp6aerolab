import React, { useEffect, useState } from 'react';
import { getProducts } from './services/api';
import axios from 'axios';

// Importar todos los SVG y PNG
const svgIcons = require.context('./assets/icons', false, /\.(svg)$/);
const pngImages = require.context('./assets/product-pics', false, /\.(png)$/);

// Obtener los SVGs y PNGs
const svgFiles = svgIcons.keys().map((fileName) => ({
  name: fileName.replace('./', '').replace('.svg', ''), // Eliminar la extensión .svg
  icon: svgIcons(fileName),
}));

const pngFiles = pngImages.keys().map((fileName) => ({
  name: fileName.replace('./', '').replace('.png', ''), // Eliminar la extensión .png
  image: pngImages(fileName),
}));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);  // Aquí guardaremos los datos del usuario

  useEffect(() => {
    // Llamada a la API de productos
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();

    // Llamada a la API del Backend para obtener los datos del usuario
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user'); // Petición al backend
        setUserData(response.data);
      } catch (err) {
        console.error('Error al obtener los datos del usuario:', err);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Productos</h1>
      {userData && (
        <div>
          <h2>Datos del Usuario</h2>
          <p>{userData.name}</p>
          <p>{userData.points} puntos</p>
          {/* Aquí puedes agregar más información sobre el usuario */}
        </div>
      )}
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ display: 'flex', alignItems: 'center' }}>
            {/* Encuentra el SVG correspondiente al producto */}
            <img
              src={svgFiles.find(file => file.name === product.icon)?.icon}
              alt={product.icon}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            {/* Nombre del producto */}
            <span>{product.name}</span>
            {/* Encuentra la imagen PNG correspondiente al producto */}
            <img
              src={pngFiles.find(file => file.name === product.image)?.image}
              alt={product.image}
              style={{ width: 20, height: 20, marginLeft: 10 }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
