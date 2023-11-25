import { useState } from 'react';
import End from './components/End';
import Quiz from './components/Quiz';
import Start from './components/Start';
import { QuizContext } from './helper/Context';
import image from './components/images/P.png';
import logo from './components/images/logo.png';

function App() {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [quizName, setQuizName] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    // alert("Theme changed to " + theme);
    if (theme === "light") {
      document.body.style = 'background: rgb(33, 37, 41);';
    } else {
      document.body.style = 'background: rgb(247, 247, 247);';
    }
  }
  return (
    <div>
      <div className="navbar mx-2">
        <h1 className="heading">
          <img className='logo' src={image} alt='P' onClick={() => setGameState("start")} />
          <span className={theme==="dark" && "text-light"}>olyLingo</span>
          <img className='logo' src={logo} alt='P' onClick={() => setGameState("start")} />
        </h1>
        <button className={"theme btn btn-" + (theme === "dark" ? "light" : "secondary")} onClick={toggleTheme}>
          {theme === "light" ? <span>Dark</span> : <span>Light</span>}
        </button>
      </div>
      <QuizContext.Provider value={{ score, setScore, setGameState, quizName, setQuizName, theme, toggleTheme }}>
        {gameState === "start" && <Start />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
