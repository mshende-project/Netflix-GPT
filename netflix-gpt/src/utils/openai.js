import { OPEN_AI_SECRET_KEY } from "./constants";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: { OPEN_AI_SECRET_KEY },
  dangerouslyAllowBrowser: true,
});

export default openai;
