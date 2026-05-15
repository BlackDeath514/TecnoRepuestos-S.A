const calcularTotalCompra = require('../src/utils/compra');

test('Debe calcular correctamente el total de compra', () => {
    expect(calcularTotalCompra(10, 3)).toBe(30);
});