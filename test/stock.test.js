const calcularStockDisponible = require('../src/utils/stock');

test('Debe calcular correctamente el stock disponible', () => {
    expect(calcularStockDisponible(20, 5)).toBe(15);
});