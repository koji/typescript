import { Question, QuestionState, Difficulty } from "./Types";
import { shuffleArray } from './util';


export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  // sample https://opentdb.com/api.php?amount=50&category=25&difficulty=easy&type=multiple
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await(await fetch(endPoint)).json();
  // console.log(endPoint);
  // console.log(data);

  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }
  ))

}