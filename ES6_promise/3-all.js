import { uploadPhoto, createUser } from './utils';

/* export default function handleProfileSignup() {
  // const promisePhoto = Promise.resolve();
  promisePhoto = uploadPhoto();
  promiseUser = createUser();

  const body = '';
  const firstname = '';
  const lastname = '';
  if (promisePhoto.status === 200) {
    body = promisePhoto.body;
  }

  if (promiseUser) {
    firstname = promiseUser.firstname;
    lastname = promiseUser.lastname;
  }
  console.log(`${body} ${firstname} ${lastname}`);
}
*/

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([PhotoResponse, UserResponse]) => {
      const response = `${PhotoResponse.body} ${UserResponse.firstName} ${UserResponse.lastName}`;
      console.log(response);
    })

    .catch(() => console.log('Signup system offline'));

  // .finally (()=> {
}
