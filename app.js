const http = require('http');

const [ period, interval ] = process.argv.slice(2);

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url !== `/favicon.ico`) {
    let intervalCount = 0;
    let currentTime;
    const intervalId = setInterval(() => {
      currentTime = new Date().toString();
      intervalCount += +interval;
      if (intervalCount >= +period) {
        clearInterval(intervalId);
        res.end(currentTime);
        return;
      }
      console.log(currentTime);
    }, interval);
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Something went wrong`);
    return;
  }

  console.log(`server is up and running on ${PORT}`);
});