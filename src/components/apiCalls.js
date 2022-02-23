function getData(url, method, body, callback) {
  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      callback(response);
    })
    .catch((err) => {
      console.log(err);
      callback({ code: 400, status: "Something went Wrong. Try Again later." });
    });
}

export default getData;
