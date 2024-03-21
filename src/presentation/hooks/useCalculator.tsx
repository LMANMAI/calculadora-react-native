import {useEffect, useRef, useState} from 'react';
enum Operator {
  add = '+',
  subtrac = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [prevnumber, setPrevNumber] = useState<string>('0');
  const [formula, setFormula] = useState<string>('');

  const lastOperation = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  };

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber('0');
  };

  const toggleSign = () => {
    console.log(number);
    if (number !== '0') {
      if (number.includes('-')) {
        return setNumber(number.replace('-', ''));
      }
      setNumber('-' + number);
    }
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  //operations
  const divideOperations = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperations = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const addOperations = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const subtracOperations = () => {
    setLastNumber();
    lastOperation.current = Operator.subtrac;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const number1 = Number(firstValue);
    const number2 = Number(secondValue);

    if (isNaN(number2)) return number1;
    switch (operation) {
      case Operator.add: {
        return number1 + number2;
      }
      case Operator.subtrac: {
        return number1 - number2;
      }
      case Operator.divide: {
        return number1 / number2;
      }
      case Operator.multiply: {
        return number1 * number2;
      }

      default:
        throw new Error('Operation not implemented');
    }
  };
  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subresult = calculateSubResult();
    setPrevNumber(subresult.toString());
  }, [formula]);

  return {
    //properties
    number,
    prevnumber,
    formula,
    //methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperations,
    multiplyOperations,
    addOperations,
    subtracOperations,
    calculateResult,
  };
};
