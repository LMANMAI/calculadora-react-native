import {useRef, useState} from 'react';
enum Operator {
  add,
  subtrac,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [prevnumber, setPrevNumber] = useState<string>('0');

  const lastOperation = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
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
    const number1 = Number(number);
    const number2 = Number(prevnumber);

    switch (lastOperation.current) {
      case Operator.add: {
        setNumber(`${number1 + number2}`);
        break;
      }
      case Operator.subtrac: {
        setNumber(`${number1 - number2}`);
        break;
      }
      case Operator.divide: {
        setNumber(`${number1 / number2}`);
        break;
      }
      case Operator.multiply: {
        setNumber(`${number1 * number2}`);
        break;
      }

      default:
        throw new Error('Operation not implemented');
    }
    setPrevNumber('0');
  };
  return {
    //properties
    number,
    prevnumber,
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
