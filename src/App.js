import React, { useState } from 'react';
import styles from './App.css';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATIONS = ['+', '-', '=', 'C'];

function App() {
  const [operand1, setOperand1] = useState('');
  const [operator, setOperator] = useState('');
  const [operand2, setOperand2] = useState('');
  const [resultColor, setResultColor] = useState(styles.defaultResult);

  const handleNumberClick = (num) => {
    if (operator === '') {
      setOperand1(operand1 + num);
    } else {
      setOperand2(operand2 + num);
    }
    setResultColor(styles.defaultResult);
  };

  const handleOperationClick = (op) => {
    switch (op) {
      case '+':
      case '-':
        setOperator(op);
        setResultColor(styles.defaultResult);
        break;
      case '=':
        if (operand1 !== '' && operand2 !== '') {
          const result = calculateResult();
          setOperand1(result.toString());
          setOperand2('');
          setOperator('');
          setResultColor(styles.result);
        }
        break;
      case 'C':
        setOperand1('');
        setOperand2('');
        setOperator('');
        setResultColor(styles.defaultResult);
        break;
      default:
        break;
    }
  };

  const calculateResult = () => {
    const num1 = parseInt(operand1, 10);
    const num2 = parseInt(operand2, 10);
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    }
    return 0;
  };

  return (
    <div className={styles.calculator}>
      <div className={`${styles.display} ${resultColor}`}>
        {operand1} {operator} {operand2}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)} className={styles.numberButton}>
            {num}
          </button>
        ))}
        {OPERATIONS.map((op) => (
          <button key={op} onClick={() => handleOperationClick(op)} className={styles.operationButton}>
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
