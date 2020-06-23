import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import {
  getQuestions,
  getQuestion,
  getRandomQuestion,
  addQuestion,
} from "./controllers/questions.ts";

const router = new Router();

router
  .get("/api/v1/questions", oakCors(), getQuestions)
  .post("/api/v1/randomQuestion", oakCors(), getRandomQuestion)
  .get("/api/v1/questions/:id", getQuestion);
// .post("/api/v1/questions", oakCors(), addQuestion);

export default router;
