const server = require('./server/api/server');

const port = 9000;
server.listen(port, () => console.log(`Api running on ${port}.`));
