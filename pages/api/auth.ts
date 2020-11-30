import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
    token: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const formData: FormData = req.body;
    const validated = await performCaptchaCheck(formData.token);
  if (!validated) {
    res.status(400);
    res.json({response: "failure"})
    return;
  } else {
      res.status(201);
      res.json({response: "success"});
      return;
    }
};

async function performCaptchaCheck(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
}