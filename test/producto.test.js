const request = require('supertest');
const app = require('../src/app');

describe('POST /api/productos', () => {

    test('Debe registrar un producto correctamente', async () => {

        const response = await request(app)
            .post('/api/productos')
            .send({
                nombre: 'Cable HDMI',
                precio: 15.50,
                stock: 20
            });

        expect(response.statusCode).toBe(201);

        expect(response.body.mensaje)
            .toBe('Producto registrado correctamente');

    });

});
