import NodeMailer from './nodemailerClient';
import { BaseError } from '../../interfaces/Errors';

export async function sendEmail(mailOptions: {
  to: string;
  subject: string;
  html: string;
  cc?: string;
}) {
  try {
    // All emails will be from this company email
    const options = {
      ...mailOptions,
      from: '"Lagniappe Foods Order" <order@lagniappefoods.com>',
    };
    await NodeMailer.sendMail(options);
  } catch (error) {
    console.log(error);
    throw new BaseError('Error in sending email with nodemailer');
  }
}
