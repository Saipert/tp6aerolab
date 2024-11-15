const request = require('request');

// Token que te proporcionó Aerolab
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM2ODA2NWMxMGUzZDAwMjBkMzBmMzgiLCJpYXQiOjE3MzE2MjUwNjF9.sb32GrlM6cNF76xEq5xD2Ad9kWBAXIfs6PrBexVCVm';

// Realiza la solicitud a la API
request({
  method: 'GET',
  url: 'https://coding-challenge-api.aerolab.co/user/me',  // La URL de la API de Aerolab
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,  // El token se agrega en el encabezado
  }
}, function (error, response, body) {
  if (error) {
    console.error('Error:', error);  // Maneja cualquier error de la solicitud
  } else {
    console.log('Status:', response.statusCode);  // Muestra el código de estado HTTP
    console.log('Headers:', JSON.stringify(response.headers));  // Muestra los encabezados de la respuesta
    console.log('Response:', body);  // Muestra el cuerpo de la respuesta
  }
});
