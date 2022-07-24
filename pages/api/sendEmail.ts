// NextJS imports
import { NextApiRequest, NextApiResponse } from "next";

// Email sender
import emailjs from "@emailjs/browser";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // req.body: { name: "", company: "", email: "", city: "", message: "", }

  // Constants
  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  // Send email
  await emailjs.send(serviceID, templateID, req.body.inputValues, publicKey);

  // Success
  res.status(200).send("Success");
};

export default handler;
