const { Storage } = require('@google-cloud/storage');

const GOOGLE_CLOUD_PROJECT_ID = 'tough-anvil-257308';
const GOOGLE_CLOUD_KEYFILE = `${__dirname}/budget-app-27726760de07.json`;
const DEFAULT_BUCKET_NAME = 'bucket_budget_app'; // Replace with the name of your bucket

const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});

module.exports = {
  storage,
  defaultBucketName: DEFAULT_BUCKET_NAME,
};
