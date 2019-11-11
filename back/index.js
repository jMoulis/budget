const https = require('https');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const forceSsl = require('express-force-ssl');
const keys = require('./config/keys');
const routes = require('./routes');

mongoose.Promise = global.Promise;

mongoose
  .connect(
    process.env.NODE_ENV !== 'test' ? keys.mongoURI : keys.mongoURITest,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .catch(error => console.warn(error));
mongoose.connection.on('error', error =>
  console.warn('Warning', error.message)
);

const app = express();

let server;
if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
  server = http.createServer(app);
} else {
  const key = fs.readFileSync(
    '/etc/ssl/private/_.julienmoulis.io_private_key.key'
  );
  const cert = fs.readFileSync(
    '/etc/ssl/certs/julienmoulis.io_ssl_certificate.cer'
  );
  const cer = fs.readFileSync(
    '/etc/apache2/ssl.crt/-.julienmoulis.io_ssl_certificate_INTERMEDIATE.cer'
  );
  const httpsOptions = {
    key,
    cert,
    cer,
  };
  app.use(forceSsl);
  server = https.createServer(httpsOptions, app);
}

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: `${__dirname}/locales/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: 'fr',
    preload: ['fr', 'en'],
    saveMissing: true,
  });

app.use('/', express.static(`${__dirname}/build`));
app.use('/files', express.static(`${__dirname}/temp`));
app.use(i18nextMiddleware.handle(i18next));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

routes(app);
const PORT = process.env.PORT || 8050;
server.listen(PORT, () => {
  console.log('Listen PORT', PORT);
});
module.exports = app;
