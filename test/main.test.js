const { countCharacters, countWords, countNumbers, countCharactersWithoutSpaces, sumNumbers, calculateAverageLength } = require('../js/main');

test('Conteo de caracteres', () => {
    expect(countCharacters('Hola')).toBe(4);
    expect(countCharacters('¡Hola, mundo!')).toBe(13);
  });
  
  // Prueba para la función countWords
  test('Conteo de palabras', () => {
    expect(countWords('Hola mundo')).toBe(2);
    expect(countWords('¡Hola, mundo!')).toBe(2);
    expect(countWords('Contando palabras en una oración.')).toBe(5);
  });
  
  // Prueba para la función countNumbers
  test('Conteo de números', () => {
    expect(countNumbers('12345')).toBe(5);
    expect(countNumbers('123abc456def')).toBe(6);
    expect(countNumbers('La respuesta es 42.')).toBe(2);
  });

   // Prueba para countCharactersWithoutSpaces
   test('Conteo de caracteres sin espacios', () => {
    expect(countCharactersWithoutSpaces('Hola mundo')).toBe(9);
    expect(countCharactersWithoutSpaces('¡Hola, mundo!')).toBe(12);
  });

  // Prueba para sumNumbers
  test('Suma de números', () => {
    expect(sumNumbers('12345')).toBe(15);
    expect(sumNumbers('123abc456def')).toBe(21);
    expect(sumNumbers('La respuesta es 42.')).toBe(6);
  });

    // Prueba para calculateAverageLength
    test('Cálculo de longitud promedio de palabras', () => {
        expect(calculateAverageLength('Hola mundo')).toBe(4.5);
        expect(calculateAverageLength('¡Hola, mundo!')).toBe(6.0);
        expect(calculateAverageLength('Contando palabras en una oración.')).toBe(5.8);
      });