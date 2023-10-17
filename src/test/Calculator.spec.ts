import Calculator from './Calculator';

describe('Calculator', () => {
  let calc: Calculator;
  beforeAll(() => {});
  beforeEach(() => {
    calc = new Calculator();
  });
  afterEach(() => {});
  afterAll(() => {});

  it('should add 1 and 1 and return 2', () => {
    const result = calc.add(1, 1);

    expect(result).toBe(2);
  });
});
