const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/productos', (req, res) => {

    const producto = req.body;

    if (!producto.nombre || !producto.precio) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        });
    }

    return res.status(201).json({
        mensaje: 'Producto registrado correctamente'
    });

});

module.exports = app;