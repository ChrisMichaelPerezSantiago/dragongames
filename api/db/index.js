const { startDB } = require('./storage.js');

const init = async () => {
  console.log('Starting db..');
  await startDB();
};
