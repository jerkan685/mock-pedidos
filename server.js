const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/pedidos', (req, res) => {
  const status = req.query.status;
  const mockPath = path.join(__dirname, 'mock.json');
  fs.readFile(mockPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'No se pudo leer el archivo mock.json' });
    }
    let pedidos = [];
    try {
      pedidos = JSON.parse(data);
    } catch (e) {
      return res.status(500).json({ error: 'mock.json no es un JSON válido' });
    }
    if (status) {
      // Si el mock es un array de pedidos
      if (Array.isArray(pedidos)) {
        pedidos = pedidos.filter(p => p.status === status);
      } else if (Array.isArray(pedidos.pedidos)) {
        pedidos.pedidos = pedidos.pedidos.filter(p => p.status === status);
      }
    }
    res.json(pedidos);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
