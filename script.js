//your JS code here. If required.
function manipulateData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

manipulateData([1, 2, 3, 4])
  .then(numbers => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(number => number % 2 === 0);
        document.getElementById('output').textContent = evenNumbers.join(', ');
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(number => number * 2);
        document.getElementById('output').textContent = multipliedNumbers.join(', ');
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

