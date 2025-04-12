export default function handleResponseFromAPI(promise) {
  // return
  // promise.then((response) => {
  return promise

  // .then((response) => {
  // console.log(`status : ${response.status}, body : ${response.body}`);
  // const response = { status: 200, body: 'success' };
  // console.log(`status: ${response.status}, body: ${response.body}`);
  //  console.log(response);
  // return response;
  /* .then(() => {
      const response = { status: 200, body: 'success' };
      // console.log(`status: ${response.status}, body: ${response.body}`);
      return (`status: ${response.status}, body: ${response.body}`);
    }) */
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch((error) => {
      console.error(error);
      // return (error);
    })
    .finally(() => { // alway execute regardless
      console.log('Got a response from the API');
    });
}
