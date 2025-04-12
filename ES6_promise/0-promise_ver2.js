export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      const success = true;
      if (success) {
        resolve({ data: "Successful" });
      } else {
        reject(new Error("Request Failed"));
      }
    });
  }
