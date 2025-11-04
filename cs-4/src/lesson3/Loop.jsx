import React from "react";
function Loop() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getEvenNumbers = (numbers) => {
    const even = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      }
    }

    return even;
  };

  const evenNumbers = getEvenNumbers(numbers);
  return <>{evenNumbers}</>;
}

export default Loop;
