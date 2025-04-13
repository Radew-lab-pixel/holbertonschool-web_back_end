import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /*
    Promise.all([signUpUser(firstName,lastName),uploadPhoto(fileName)])
    .then(([userResponse, photoResponse]) => {
        const response = `${UserRespomse.firstName} `
    });
} */

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
}
