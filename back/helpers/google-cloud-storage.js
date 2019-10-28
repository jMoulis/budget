const { Storage } = require('@google-cloud/storage');

const GOOGLE_CLOUD_PROJECT_ID = 'budget-257304';
const GOOGLE_CLOUD_KEYFILE = `${__dirname}/budget-435d1896f9ab.json`;

const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE
});

module.exports = {
  storage,
  getPublicUrl: (bucketName, fileName) =>
    `https://storage.googleapis.com/${bucketName}/${fileName}`
};
