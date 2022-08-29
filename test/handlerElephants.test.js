const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('funcao sem parametro retorn unfined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Deve ser uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  test('funcao com parametro numerico retorna mensagem de erro', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('funcao com parametro "count" retorna quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('funcao com parametro "names" retorna array de nomes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  test('funcao com parametro "averageAge" retorna media de idade', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  test('funcao com parametro "location" retorna localizao dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  test('funcao com parametro "popularity" retorna localizao dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  test('funcao com parametro "availability" retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('a função deve retornar null com parâmetro deconhecido', () => {
    expect(handlerElephants('13')).toEqual(null);
  });
});
