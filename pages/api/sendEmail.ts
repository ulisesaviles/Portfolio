// NextJS imports
import { NextApiRequest, NextApiResponse } from "next";

// HTTPS
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // req.body: { name: "", company: "", email: "", city: "", message: "", }

  // Constants
  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  // Data
  const data = {
    service_id: serviceID,
    template_id: templateID,
    user_id: publicKey,
    template_params: req.body,
  };

  // Send email
  await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

  // Success
  res.status(200).send("Success");
};

export default handler;
