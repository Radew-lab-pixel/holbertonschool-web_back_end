export default function signUpUser(firstName, lastName) {
  // const promise = new Promise((resolve, reject))
  // return new Promise.then(() => {

  /*  const promise = new Promise((resolve) => {
    const response = `{ firstName: ${firstName}, lastName: ${lastName} }`;
    resolve(response);
  });

  promise
    .then(() => (`{ firstName: ${firstName}, lastName: ${lastName} }`))
    .catch(() => new Error());
} */

  return new Promise((resolve) => {
    // resolve(`{ firstName: ${firstName},\nlastName: ${lastName} }`);
    resolve(`{firstName: ${firstName}, lastName: ${lastName} }`);
  });
}
