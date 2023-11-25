import React, { useContext } from 'react';
import { english, hindi, gujrati, marathi, telugu, french, german } from '../quizQuestions';
import { QuizContext } from '../helper/Context';

function End() {
  const { quizName, score, setScore, setGameState } = useContext(QuizContext);
  const restart = () => {
    setScore(0);
    document.title = "Quizzer";
    setGameState("start");
  }
  const quizzes = { english, hindi, gujrati, marathi, telugu, french, german };
  const Questions = quizzes[quizName];
  return (
    <>
      <div className="card container end">
        <div className="card-body final-score">
          <h5 className="card-title ">You got <span className='result'>{score}</span> out of <span className='result'>{Questions.length}</span> answers correct</h5>
          <button type="button" className="btn btn-primary" onClick={restart}>Start Over</button>
        </div>
      </div>
    </>
  )
}

export default End