import React, { useContext, useState } from 'react'
import { english, hindi, gujrati, marathi, telugu, french, german } from '../quizQuestions'
import { QuizContext } from '../helper/Context';
import Correct from './Correct';
import Wrong from './Wrong';

function Quiz() {
  const [question, setQuestion] = useState(0);
  //eslint-disable-next-line no-unused-vars
  const [choosenAnswer, setChoosenAnswer] = useState("");
  const { quizName, setGameState, score, setScore, theme } = useContext(QuizContext);
  const [flag, setFlag] = useState(false);
  const quizzes = { english, hindi, gujrati, marathi, telugu, french, german };
  const Questions = quizzes[quizName];

  const handleAnswer = (answer) => {
    if (flag === false) {
      setChoosenAnswer(answer);
      if (answer === Questions[question].Ans) {
        setScore(score + 1);
      }
      setFlag(true);
    }
  }

  const nextQuestion = () => {
    setFlag(false);
    if (question < Questions.length - 1) {
      setQuestion(question + 1);
    } else {
      setGameState("end");
    }
  }

  return (
    <>
      <div className={"card quiz mt-1 container " + (theme === "dark" && "bg-dark text-light")}>
        <div className="questionNo">{question + 1} of {Questions.length}</div>
        <div className="card-body flex">
          {/* <div className="image">
            <img className='ques-img' src={Questions[question].img} alt="Question image" />
          </div> */}
          <div className="question">
            <h5 className="card-title questions">
              {Questions[question].prompt}
            </h5>
            <div className="options">
              <button type="button" className="btn btn-outline-primary mt-2" onClick={() => handleAnswer("A")}>{Questions[question].A}</button>
              <button type="button" className="btn btn-outline-primary mt-2" onClick={() => handleAnswer("B")}>{Questions[question].B}</button>
              <button type="button" className="btn btn-outline-primary mt-2" onClick={() => handleAnswer("C")}>{Questions[question].C}</button>
              <button type="button" className="btn btn-outline-primary mt-2" onClick={() => handleAnswer("D")}>{Questions[question].D}</button>
            </div>
            {flag && (choosenAnswer === Questions[question].Ans ? <Correct /> : <Wrong ans={Questions[question][Questions[question].Ans]} />)}
            <div className="bottom mt-3">
              <div className='score'>Score: {score}</div>
              <button type='button' className='btn btn-success' onClick={nextQuestion}> {question === Questions.length - 1 ? "Finish Quiz" : "Next Question→"} </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz;
