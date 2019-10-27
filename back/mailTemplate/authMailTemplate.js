module.exports = {
  // TODO: Translate template Email
  error: `
    <h2>Changing password requested</h2>
    <p>You (or someone else) entered this email address when trying to change the password of an  account.</p>
    <p>However, this email address is not on our database of registered users and therefore the attempted password change has failed.</p>
    <p>If you are en customer and were expecting this email, please try again using the email address you gave when opening your account.</p>
    <p>If you are not an customer, please ignore this email.</p>
    <div>For information about, please visit <a href="http://www.test.fr"></a>.</div>
    <p>Kind regards,</p>
    <p Customer Support.</p>
  `,
  success: ({ user, resetUrl }) => `
    <h2>Hello ${user.firstName || ''},</h2>
    <p>We've sent this message because you requested that your password be reset.</p>
    <p>To get back to your account you'll need to create a new password.</p>
    <p>--------------------------------------------------------------------</p>
    <p>Here's how you do that:</p>
    <ol>
      <li>Click the link below to open a new and secure browser window.</li>
      <li>Enter the requested information and follow the instructions to reset your password.</li>
    </ol>

    <h3>Reset your password now:</h3>
    <a href="${resetUrl}">${resetUrl}</a>
  `,
};
