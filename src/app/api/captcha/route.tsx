import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = Math.random() > 0.5 ? "add" : "subtract";

  let question = "";
  let answer = 0;

  if (operation === "add") {
    question = `${num1} + ${num2}`;
    answer = num1 + num2;
  } else {
    question = `${num1} - ${num2}`;
    answer = num1 - num2;
  }

  return { question, answer: answer.toString() };
}

export async function GET() {
    const { question, answer } = generateCaptcha();

    const session = (await getIronSession(await cookies(), {
      password: process.env.COOKIE_SECRET || "",
      cookieName: process.env.COOKIE_NAME || "",
    })) as {
      save(): unknown;
      captchaAnswer: string;
    };

    session.captchaAnswer = answer;
    await session.save();

    return Response.json({ question });
}