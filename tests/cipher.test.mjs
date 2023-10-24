
const { encode, decode } = require('../js/cipher.js');

describe('Cipher Functions', () => {
  
    it('should encode a string', () => {
        const result = encode(3, 'neso');
        expect(result).toBe('qhvr')
    })

  it('should decode an encoded string', () => {
    const decoded = decode(3, 'khoor');
    expect(decoded).toBe('hello');
  });

  it('should handle uppercase and lowercase letters', () => {
    const encoded = encode(3, 'Hello World');
    expect(encoded).toBe('Khoor Zruog');
  });

  it('should handle non-alphabetic characters', () => {
    const encoded = encode(3, 'Hello, World!');
    expect(encoded).toBe('Khoor, Zruog!');
  });
});
