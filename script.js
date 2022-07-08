axios.get('https://replit.com/join/vucgeunebk-andi-de-jesusde/computadores')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// get table