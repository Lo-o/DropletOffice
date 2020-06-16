import { Client } from "https://deno.land/x/postgres/mod.ts";
import { Question } from "../types.ts";
import { dbCreds } from "../config.ts";

// Init client
const client = new Client(dbCreds);

// @desc    Get all questions
// @route   GET /api/v1/questions
const getQuestions = async ({ response }: { response: any }) => {
  try {
    await client.connect();

    const result = await client.query("SELECT * FROM questions");

    const questions = new Array();

    result.rows.map((p) => {
      let obj: any = new Object();

      result.rowDescription.columns.map((el, i) => {
        obj[el.name] = p[i];
      });

      questions.push(obj);
    });

    response.body = {
      success: true,
      data: questions,
    };
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  } finally {
    await client.end();
  }
};

// @desc    Get single question
// @route   GET /api/v1/questions/:id
const getQuestion = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  try {
    await client.connect();

    const result = await client.query(
      "SELECT * FROM questions WHERE id = $1",
      params.id
    );

    if (result.rows.toString() === "") {
      response.status = 404;
      response.body = {
        success: false,
        msg: `No question with the id of ${params.id}`,
      };
      return;
    } else {
      const question: any = new Object();

      result.rows.map((p) => {
        result.rowDescription.columns.map((el, i) => {
          question[el.name] = p[i];
        });
      });

      response.body = {
        success: true,
        data: question,
      };
    }
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  } finally {
    await client.end();
  }
};

// @desc    Get random question
// @route   GET /api/v1/questions/:id
const getRandomQuestion = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  try {
    await client.connect();

    const result = await client.query(
      "SELECT * FROM questions WHERE id NOT IN (8, 9, 10)",
      params.id
    );

    if (result.rows.toString() === "") {
      response.status = 404;
      response.body = {
        success: false,
        msg: `No questions`,
      };
      return;
    } else {
      const question: any = new Object();

      result.rows.map((p) => {
        result.rowDescription.columns.map((el, i) => {
          question[el.name] = p[i];
        });
      });

      response.body = {
        success: true,
        data: question,
      };
    }
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  } finally {
    await client.end();
  }
};

// @desc    Add question
// @route   Post /api/v1/questions
const addQuestion = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const question = body.value;

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    try {
      await client.connect();

      const result = await client.query(
        "INSERT INTO questions(question, correct_answer, option1, option2, option3, option4) VALUES($1,$2,$3,$4,$5,$6)",
        question.question,
        question.correct_answer,
        question.option1,
        question.option2,
        question.option3,
        question.option4
      );

      response.status = 201;
      response.body = {
        success: true,
        data: question,
      };
    } catch (err) {
      response.status = 500;
      response.body = {
        success: false,
        msg: err.toString(),
      };
    } finally {
      await client.end();
    }
  }
};

export { getQuestions, getQuestion, addQuestion, getRandomQuestion };
