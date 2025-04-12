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
