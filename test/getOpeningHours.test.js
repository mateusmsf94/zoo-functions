const getOpeningHours = require('../src/getOpeningHours');

const objExpected = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const close = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Se nao receber parametros retorna um objetos com todos os dias', () => {
    expect(getOpeningHours()).toEqual(objExpected);
  });

  it('Se receber parametro Monday 09:00-AM deve dizer que o zoologico ta fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(close);
  });

  it('Se receber parametro Tuesday 09:00-AM deve dizer que o zoologico ta aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Se receber parametro Wednesday 09:00-PM deve dizer que o zoologico ta fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(close);
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Para os argumentos Sunday e C9:c0-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Sunday', 'C9:c0-AM')).toThrow('The hour should represent a number');
  });

  it('Para os argumentos Sunday e 13:00-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Para os argumentos Sunday e 11:70-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Sunday', '11:70-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Para os argumentos Fryday e 11:20-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Fryday', '11:20-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Para os argumentos Friday e 11:20-AM deve lançar uma exceção', () => {
    expect(getOpeningHours('Friday', '12:00-AM')).toBe(close);
  });
});
