import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getQuestions,
  getQuestion,
  addQuestion,
} from "./controllers/questions.ts";

const router = new Router();

router
  .get("/api/v1/questions", getQuestions)
  .get("/api/v1/questions/:id", getQuestion)
  .post("/api/v1/questions", addQuestion);

export default router;
