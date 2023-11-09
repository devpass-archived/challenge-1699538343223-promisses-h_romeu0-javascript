const { fetchData } = require('./promiseUtils');

fetchData()
  .then(response => {
    console.log('Data fetched successfully:', response);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });