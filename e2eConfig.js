const { exec } = require('child_process');
const serve = 'serve --no-clipboard --single --listen 5000 build';
const startServerAndTest = `start-server-and-test ${serve} :5000 cypress run`;
const e2e = `npm run build && npm run ${startServerAndTest}`;

console.log(e2e);

exec(e2e);
