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
