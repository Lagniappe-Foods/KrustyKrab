import { sendEmail } from './sendEmail';

export async function sendRegisterEmail(email: string, emailToken: string) {
  // Send out verification email
  const mailOptions = {
    to: email,
    subject: 'Verify your email',
    html: `<h2>Thanks for registering</h2>
          <h4>Please verify your email to continue</h4>
          <button>
            <a href=${process.env.BASE_URL}/verify-email?emailToken=${emailToken}>
              Verify Email
            </a>
          </button>`,
  };

  await sendEmail(mailOptions);
}
