import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const { SENDGRID_API_KEY, MAIL_ADDRESS } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = async (data) => {
  const email = { ...data, from: MAIL_ADDRESS };
  await sgMail.send(email);
  return true;
};
