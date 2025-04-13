import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* failed checker
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([UserResponse, PhotoResponse]) => {
      const response = `${UserResponse.firstName} ${UserResponse.lastName}
      ${PhotoResponse.fileName}`;
      console.log(response);
    })
    .catch((error) => console.error(error));
}
*/

/* failed checker
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName).catch((e) => e),
    uploadPhoto(fileName).catch((e) => e),
  ])
    .then(([userResult, photoResult]) => [
      {
        status: userResult instanceof Error ? 'rejected' : 'fulfilled',
        value: userResult instanceof Error ? userResult.message : userResult,
      },
      {
        status: photoResult instanceof Error ? 'rejected' : 'fulfilled',
        value: photoResult instanceof Error ? photoResult.message : photoResult,
      },
    ]);
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

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
