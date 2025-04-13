import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([UserResponse, PhotoResponse]) => {
      const response = `${UserResponse.firstName} ${UserResponse.lastName} ${PhotoResponse.fileName}`;
      console.log(response);
    })
    .catch((error) => console.error(error));
}
/*
 return Promise.all([uploadPhoto(), createUser()])
    .then(([PhotoResponse, UserResponse]) => {
      const response = `${PhotoResponse.body} ${UserResponse.firstName} ${UserResponse.lastName}`;
      console.log(response);
    })

    .catch(() => console.log('Signup system offline'));

  // .finally (()=> {
}
*/
/*
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: result.status,
          value: result.value,
        };
      }
      return {
        status: result.status,
        value: result.reason,
      };
    }));
} */
