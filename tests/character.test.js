import Character from '../src/js/character.js';

describe('TEST: сharacter', () => {
  test('character deals 2 attacks', () => {
    const received = new Character({ health: 200, attack: 30, defence: 40 });
    const expected = { health: 400, attack: 60, defence: 80 };

    received._powerMode = true;
    received.attackCharacter();
    received.attackCharacter();

    const { health, attack, defence } = received;
    expect({ health, attack, defence }).toEqual(expected);
  });

  test('character deals more than 3 attacks', () => {
    const received = new Character({ health: 200, attack: 30, defence: 40 });
    const expected = { health: 200, attack: 30, defence: 40 };

    received._powerMode = true;
    received.attackCharacter();
    received.attackCharacter();
    received.attackCharacter();
    received.attackCharacter();

    const { health, attack, defence } = received;
    expect({ health, attack, defence }).toEqual(expected);
  });

  test('forgot to pass an object', () => {
    const received = () => new Character();
    expect(received).toThrow();
  });

  test('not called setter', () => {
    const received = new Character({ health: 200, attack: 30, defence: 40 });

    received.attackCharacter();
    expect(received.powerMode).toBeFalsy();
  });

  test('setter is not a boolean', () => {
    const received = new Character({ health: 200, attack: 30, defence: 40 });

    const setPowerMode = () => received._powerMode = 31312312;
    expect(setPowerMode).toThrow();
  });
});
