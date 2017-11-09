const fns = require('./functions');

test('fns.return2 should return 2', () => {
    expect(fns.returnTwo()).toBe(2)
})

test('fns.greeeting should equal hello with name jaden', () => {
    expect(fns.greeting('jaden')).toBe('hello, jaden.')
})

describle('Math functions', () => { 

    test('add should return answer of added params', () => {
        expect(fns.add(1, 2)).toEqual(3);
        expect(fns.add(10, 10)).toEqual(20);
    })
    test('sub should return answer of subtracted params', () => {
        expect(fns.sub(1, 2)).toEqual(-1);
        expect(fns.sub(14, 10)).toEqual(4);
    })
    test('mult should return answer of multipliedparams', () => {
        expect(fns.mult(1, 2)).toEqual(2);
        expect(fns.mult(10, 10)).toEqual(100);
    })
    test('divide should return answer of divided params', () => {
        expect(fns.divide(10, 2)).toEqual(5);
        expect(fns.divide(100, 5)).toEqual(20);
    })
    
})
