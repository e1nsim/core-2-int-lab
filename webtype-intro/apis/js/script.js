fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    // Do something with the data, e.g., display the advice slip
    console.log(data.slip.advice);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

const button = document.querySelector('#get-advice-btn');
const adviceDiv = document.querySelector('#advice');

button.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      // Update the UI with the advice slip
      adviceDiv.innerHTML = data.slip.advice;
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
});
