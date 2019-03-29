const handler = require('serve-handler');
const { createServer } = require('http');
const { exec } = require('child_process');
const { open, run } = require('cypress');

const e2eRun = (port = 5000) => {
  const server = createServer((request, response) =>
    handler(request, response, {
      public: 'build'
    })
  );
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Running at http://localhost:${port}`);
    run().then(() => {
      process.exit();
    });
  });
};

const e2eRunDev = baseUrl => {
  Promise.resolve(exec('react-scripts start')).then(() => {
    open({
      config: {
        baseUrl
      }
    });
  });
};

module.exports = {
  e2eRun,
  e2eRunDev
};
