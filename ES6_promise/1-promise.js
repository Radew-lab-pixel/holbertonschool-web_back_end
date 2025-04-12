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
