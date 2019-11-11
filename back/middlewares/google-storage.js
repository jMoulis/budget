const {
  storage,
  defaultBucketName,
} = require('../helpers/google-cloud-storage');

exports.sendUploadToGCS = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const bucketName = req.body.bucketName || defaultBucketName;
  const bucket = storage.bucket(bucketName);
  const gcsFileName = `${Date.now()}-${req.file.originalname}`;
  const file = bucket.file(gcsFileName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on('error', err => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsFileName;
    next();
  });

  stream.end(req.file.buffer);
};
