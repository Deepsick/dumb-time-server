const http = require('http');

const [ period, interval ] = process.argv.slice(2);

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url !== `/favicon.ico`) {
    let currentTime;
    const intervalId = setInterval(() => {
      currentTime = new Date().toString();
      console.log(currentTime);
    }, interval);

    setTimeout(() => {
      clearInterval(intervalId);
      res.end(currentTime);
    }, period); 
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Something went wrong`);
    return;
  }

  console.log(`server is up and running on ${PORT}`);
});