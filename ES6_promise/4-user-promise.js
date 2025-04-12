export default function signUpUser(firstName, lastName) {
  return Promise.resolve(
    // `{firstName: ${firstName}, lastName: ${lastName} }`,
    { firstName, lastName },
    // {"firstName": "Guillaume", "lastName": "Salva"}
  );

  // return Promise.resolve({ firstName, lastName });
}
