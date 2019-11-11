const { storage } = require('../helpers/google-cloud-storage');

module.exports = {
  async uploadFile(bucketName, filename) {
    try {
      // Uploads a local file to the bucket
      await storage.bucket(bucketName).upload(filename, {
        gzip: true,
        metadata: {
          cacheControl: 'public, max-age=31536000',
        },
      });

      console.log(`${filename} uploaded to ${bucketName}.`);
    } catch (error) {
      console.log(error.message);
    }
  },
  async generateV4ReadSignedUrl(bucketName, filename) {
    const options = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    };
    try {
      const [url] = await storage
        .bucket(bucketName)
        .file(filename)
        .getSignedUrl(options);

      return url;
    } catch (error) {
      console.log(error);
    }
    return null;
  },
};
