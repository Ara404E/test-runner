import {describe, expect, test} from '@jest/globals';
import {capitalize , reverseString , caesarCipher ,analyzeArray, calculator} from './my-first-test-runner/module.js';


describe("Capitalize function", () =>{
    
  test('handles single letter', () => {
    expect(capitalize("a")).toBe("A");
  });
  
  test('handles already capitalized words', () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
  
  test('handles all uppercase', () => {
    expect(capitalize("WORLD")).toBe("World");
  });
  
  test('handles mixed case', () => {
      expect(capitalize("lolZZ")).toBe('Lolzz');
});

test('handles empty string', () => {
    expect(capitalize("")).toBe("");
});

test('numbers in string' , ()=>{
    expect(capitalize("123abc")).toBe("123abc")
})

});

describe('reversing a string function' , () =>{
    test('handles empty String' , ()=>{
        expect(reverseString("")).toBe("")
    })

    test('reverse a single letter' , ()=>{
        expect(reverseString("a")).toBe("a")
    })

    test('reverse string' , ()=>{
        expect(reverseString("World")).toBe("dlroW")
    })

    test('reverse a mixed case string' , ()=>{
        expect(reverseString("WoRLd")).toBe("dLRoW")
    })

    test('numbers in string' , ()=>{
        expect(reverseString("123abc")).toBe("cba321")
    })
    
})


describe('Simple calculator' , () =>{
    test('one plus two should get 3',()=>{
        expect(calculator.add(1,2)).toBe(3)
    })
    
    test('one minus two should get -1',()=>{
        expect(calculator.subtract(1,2)).toBe(-1)
    })

    
    test('one * two should get 2',()=>{
        expect(calculator.multiply(1,2)).toBe(2)
    })

    
    test('one divided by two should get half',()=>{
        expect(calculator.divide(1,2)).toBe(0.5)
    })

    test('one divided by zero should get undefined',()=>{
        expect(calculator.divide(1,0)).toBe(Infinity)
    })

    test('negative one divided by zero should get infinity',()=>{
        expect(calculator.divide(1,0)).toBe(Infinity)
    })
})




describe('caesarCipher', () => {
    test('should correctly shift lowercase letters', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('should correctly shift uppercase letters', () => {
        expect(caesarCipher('ABC', 1)).toBe('BCD');
        expect(caesarCipher('ABC', 3)).toBe('DEF');
    });

    test('should handle wrapping of letters from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('should leave non-alphabetic characters unchanged', () => {
        expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
        expect(caesarCipher('1234!@#$%', 3)).toBe('1234!@#$%');
    });

    test('should handle negative shift correctly', () => {
        expect(caesarCipher('abc', -1)).toBe('zab');
        expect(caesarCipher('ABC', -1)).toBe('ZAB');
    });

    test('should handle zero shift correctly', () => {
        expect(caesarCipher('abc', 0)).toBe('abc');
        expect(caesarCipher('ABC', 0)).toBe('ABC');
    });
});

describe('analyzeArray', () => {
    test('should correctly analyze an array of positive numbers', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    test('should correctly analyze an array with negative numbers', () => {
        expect(analyzeArray([-10, -5, 0, 5, 10])).toEqual({
            average: 0,
            min: -10,
            max: 10,
            length: 5
        });
    });

    test('should correctly analyze an array with a single number', () => {
        expect(analyzeArray([5])).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1
        });
    });

    test('should correctly analyze an array with repeated numbers', () => {
        expect(analyzeArray([3, 3, 3, 3])).toEqual({
            average: 3,
            min: 3,
            max: 3,
            length: 4
        });
    });

    test('should correctly analyze an array with floating point numbers', () => {
        expect(analyzeArray([1.5, 2.5, 3.5, 4.5])).toEqual({
            average: 3,
            min: 1.5,
            max: 4.5,
            length: 4
        });
    });

    test('should return NaN for empty array (optional: handle this separately)', () => {
        expect(analyzeArray([])).toEqual({
            average: NaN,
            min: undefined,
            max: undefined,
            length: 0
        });
    });
});