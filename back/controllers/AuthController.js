const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ResetPwd = require('../models/ResetPwd');
const keys = require('../config/keys');
const Api = require('../services/Api');
const messages = require('../mailTemplate/authMailTemplate');

module.exports = {
  login: async (req, res) => {
    const apiResponse = new Api(res, req);
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });
      // if (process.env.NODE_ENV !== 'test') {
      //   User.deleteMany({ fake: true }).then(() => loadFakeUser());
      // }
      if (!existingUser) {
        return apiResponse.failure(null, 404, 'user not found');
      }
      const passwordIsValid = bcrypt.compareSync(
        password,
        existingUser.password,
      );

      if (!passwordIsValid) {
        return apiResponse.failure(null, 401, 'Invalid credentials');
      }
      const token = jwt.sign(
        { user: { _id: existingUser._id }, auth: true },
        keys.jwtSecret,
        {
          expiresIn: 86400,
        },
      );
      // This second find request to fetch the user without password
      // it's needed because the first existingUser needs the password to be compared
      // in the password bcrypt
      const user = await User.findOne(
        { _id: existingUser._id },
        { password: 0 },
      );
      return apiResponse.success({ user, token });
    } catch (error) {
      return apiResponse.failure(error);
    }
  },

  register: async (req, res) => {
    const apiResponse = new Api(res, req);
    try {
      const existingUser = await User.findOne(
        { email: req.body.email },
        { password: 0 },
      );
      if (existingUser) {
        return apiResponse.failure(
          null,
          409,
          'Email already exists, please pick another one or sign in',
        );
      }
      let hashedPassword;
      if (req.body.password) {
        hashedPassword = bcrypt.hashSync(req.body.password, 10);
      }
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });

      const user = await User.findOne({ _id: newUser._id }, { password: 0 });

      const token = jwt.sign(
        { user: { _id: user._id }, auth: true },
        keys.jwtSecret,
        {
          expiresIn: 86400,
        },
      );
      return apiResponse.success({ user, token });
    } catch (error) {
      return apiResponse.failure(error, 422);
    }
  },
  resetPassword: async (req, res) => {
    const apiResponse = new Api(res, req);
    const { t } = req;
    const { email } = req.body;

    try {
      if (!email)
        return apiResponse.failure(null, 422, {
          error: {
            email: t('emailMandatory'),
          },
        });
      // Check if user exists
      const user = await User.findOne(
        { email: email.toLowerCase() },
        { password: 0 },
      );

      if (!user) {
        await module.exports
          .main({
            message: t('messagePwd.error', {
              message: messages.error,
              interpolation: { escapeValue: false },
            }),
            to: email.toLowerCase(),
            subject: t('messagePwd.passwordRequested'),
          })
          .catch(error => {
            throw new Error(error.message);
          });
        return apiResponse.success({
          success: t('mailSent', { email: email.toLowerCase() }),
        });
      }
      // if it is. create jwt token with short validity time
      const token = jwt.sign({ user: user._id }, keys.jwtSecret, {
        expiresIn: 60,
      });

      const resetUrl = `http://localhost:3000/reset?token=${token}`;
      // store the jwt with userId
      await ResetPwd.create({ userId: user._id, token });
      // send email with link to reset form
      await module.exports.main({
        message: t('messagePwd.success', {
          message: messages.success({ user, resetUrl }),
          interpolation: { escapeValue: false },
        }),
        to: email.toLowerCase(),
        subject: t('messagePwd.passwordRequested'),
      });
      apiResponse.success({
        message: t('mailSent', { email: email.toLowerCase() }),
      });
    } catch (error) {
      apiResponse.failure(null, 422, t('422'));
    }
  },
  checkPassword: async (req, res) => {
    const { t } = req;
    const { token } = req.body;
    try {
      const { user } = jwt.verify(token, keys.jwtSecret);
      const checkedToken = await ResetPwd.findOne({ userId: user, token });
      if (!checkedToken)
        return res.status(422).send({ error: { message: t('invalidToken') } });
      res.status(200).send({
        authorized: true,
        token,
        user,
      });
      await ResetPwd.deleteOne({ userId: user, token });
    } catch (error) {
      res.status(403).send({
        authorized: false,
        error: {
          message: t('jwtExpired'),
        },
      });
    }
  },
  main: async ({ message, to, subject }) => {
    const transporter = nodemailer.createTransport({
      ...keys.mail,
    });
    if (process.env.NODE_ENV !== 'test') {
      await transporter.sendMail({
        from: '"Customer service"<contact.moulis@moulis.me>',
        to,
        subject,
        html: `${message}`,
      });
    }
  },
};
