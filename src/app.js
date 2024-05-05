fetch('/data/tarot-images.json')
  .then((res) => {
    return res;
  })
  .then((body) => {
    console.log(body);
    return body.json();
  })
  .then((body) => {
    // do stuff with the data!!
  });
