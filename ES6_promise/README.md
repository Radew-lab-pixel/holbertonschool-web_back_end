##Week 23 : ES6 Promises

# Task 0 : Return a Promise using this prototype function getResponseFromAPI()

0-promise.js
export default function getResponseFromAPI() {
  // const response = new Promise((resolve, reject) => {
  // return new Promise(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        const response = { data: 'Successful' };
        resolve(response);
      } else {
        reject(new Error('Request Failed'));
      }
    }, 0); // 0ms delay
  });
}

0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

# Task 1 : Using the prototype below, return a promise. The parameter is a boolean.

1-promise.js
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // const response = { data: 'Success', status: 200 };
      // const response = { status : 200, data: "Success"};
      const response = { status: 200, body: 'Success' };
      resolve(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

# Task 2 : Using the function prototype below

function handleResponseFromAPI(promise)

2-then.js
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
      return new Error();
    })
    .finally(() => { // alway execute regardless
      console.log('Got a response from the API');
    });
}

2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

# Task 3 : In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

3-all.js
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

3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

utils.js
export function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  }
  
  
  export function createUser() {
    return Promise.resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  }
  
# Task 4 : Using the following prototype

function signUpUser(firstName, lastName) {
}
That returns a resolved promise with this object:

4-user-promise.js
export default function signUpUser(firstName, lastName) {
  return Promise.resolve(
    // `{firstName: ${firstName}, lastName: ${lastName} }`,
    { firstName, lastName },
    // {"firstName": "Guillaume", "lastName": "Salva"}
  );

  // return Promise.resolve({ firstName, lastName });
}

4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

# Task 5 : Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

5-photo-reject.js
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

# Task 6 : Handle multiple promises

6-final-user.js
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
/* failed checker
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
*/

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create both promises
  const userPromise = signUpUser(firstName, lastName)
    .then((value) => ({ status: 'fulfilled', value }))
    // .catch((error) => ({ status: 'rejected', value: error }));
    .catch((error) => ({
      status: 'rejected',
      value: error instanceof Error ? error.toString() : String(error),
    }));

  const photoPromise = uploadPhoto(fileName)
    .then((value) => ({ status: 'fulfilled', value }))
    // .catch((error) => ({ status: 'rejected', value: error }));
    .catch((error) => ({
      status: 'rejected',
      value: String(error),
    }));

  // Use Promise.all to wait for both wrapped promises
  return Promise.all([userPromise, photoPromise]);
}

6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

# Task 7 : Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).

7-load_balance.js
export default function loadBalancer(chinaDownload, USDownload) {
  /* this work from internet example
    return Promise.race([chinaDownload, USDownload]);
}
*/
  /* contain
  Promise.race([chinaDownload, USDownload])
    .then((value) => console.log(value));
}
*/
  /*  output undefined
  Promise.any([chinaDownload, USDownload])
  // .then((value) => console.log(value))
  // .then(String(value)); // => value);
    .then((value) => value);
} */

  return Promise.any([chinaDownload, USDownload])
  // .then((value) => console.log(value))
  // .then(String(value)); // => value);
    .then((value) => value);
}

/* this work
  return Promise.any([chinaDownload, USDownload])
    .then((value) => value)
    .catch((error) => {
      console.error('Both downloads failed:', error);
      throw error; // Re-throw if you want the error to propagate
    });
}
*/
// use Promise.race work too

7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}
test();

# Task 8 : Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).

8-try.js
export default function divideFunction(numerator, denominator) {
  // if ((!(denominator instanceof Number)) || (!(numerator instanceof Number))) {
  if ((typeof numerator !== 'number') || (typeof denominator !== 'number')) {
    throw new TypeError('numerator or denominator has to be number');
  }
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}

8-main.js
export default function divideFunction(numerator, denominator) {
  // if ((!(denominator instanceof Number)) || (!(numerator instanceof Number))) {
  if ((typeof numerator !== 'number') || (typeof denominator !== 'number')) {
    throw new TypeError('numerator or denominator has to be number');
  }
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}

# Task 9 : Write a function named guardrail that will accept one argument mathFunction (Function).

This function should create and return an array named queue.

9-try.js
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}

9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));