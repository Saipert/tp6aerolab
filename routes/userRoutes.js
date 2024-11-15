const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/getUserData');  // Importa el controlador

// Ruta para obtener los datos del usuario
router.get('/me', async (req, res) => {
  try {
    const data = await getUserData();  // Llama a la función para obtener los datos
    res.json(data);  // Responde con los datos obtenidos
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    res.status(500).json({ message: 'Error al obtener los datos del usuario' });  // Manejo de error
  }
});

module.exports = router;  // Exporta las rutas
