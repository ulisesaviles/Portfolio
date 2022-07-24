import { NextApiRequest, NextApiResponse } from "next";

// Email sender
import emailjs from "@emailjs/browser";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // req.body: { name: "", company: "", email: "", city: "", message: "", }

  // Constants
  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  // Send email
  emailjs.send(serviceID, templateID, req.body.inputValues, publicKey);

  // Return
  res.status(200).send("Success");
}
