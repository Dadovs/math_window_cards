import React, { useState, useEffect } from 'react';

const Division = () => {
    const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
  const [gameOver, setGameOver] = useState(false);
  const [userName, setUserName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [isPopupClicked] = useState(false);

  useEffect(() => {
    let options = [];

    switch (num1) {
      case 1:
        options = [1];
        break;
      case 2:
        options = [1, 2];
        break;
      case 3:
        options = [1, 3];
        break;
      case 4:
        options = [2, 4];
        break;
      case 5:
        options = [1, 5];
        break;
      case 6:
        options = [2, 3, 6];
        break;
      case 7:
        options = [1, 7];
        break;
      case 8:
        options = [2, 4, 8];
        break;
      case 9:
        options = [1, 9];
        break;
      case 10:
        options = [2, 5, 10];
        break;
      default:
        break;
    }

    setNum2(options[Math.floor(Math.random() * options.length)]);
  }, [num1]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(answer) === num1 / num2) {
      setScore(score + 1);
    }
    setNum1(Math.floor(Math.random() * 10) + 1);
    setAnswer('');
    setQuestionCount(questionCount + 1);

    if (questionCount >= 99 && isPopupClicked) {
      setScore(0);
      setQuestionCount(0);
      setTimeRemaining(5 * 60);
      setNum1(Math.floor(Math.random() * 10) + 1);
    }
  };
  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    setIsNameEntered(true);
  };

  useEffect(() => {
    if (questionCount === 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);

    if (timeRemaining <= 0 || questionCount >= 100) {
      clearInterval(timerId);
      handleGameOver();
      if (isPopupClicked && answer !== '') {
        setScore(0);
        setQuestionCount(0);
        setTimeRemaining(5 * 60);
      }
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining, questionCount, score, isPopupClicked, answer]);


  return (
    
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-white to-blue-500">
        <button
      className="reset-button text-gray-800 bg-yellow-400 border border-gray-700 rounded-3xl px-4 py-2 text-lg md:text-2xl lg:text-3xl hover:bg-yellow-600 hidden sm:block absolute bottom-0 right-0 mb-4 mr-4"
      onClick={() => {
        setScore(0);
        setQuestionCount(0);
        setTimeRemaining(60 * 5); // Reset to 5 minutes
      }}
    >
      Reset
    </button>
      <div className="bgimg border-2 border-black rounded-2xl bg-white h-[80vh] w-[90vw] max-w-[700px] p-4 mt-6">
        <div className="text-center py-4 font-mono">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-2">
            Math Window Card
          </h1>
          
          <h2 className="font-bold text-lg md:text-2xl lg:text-3xl mb-2">
            Division D1
          </h2>
          
          <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl my-8">
            {num1} ÷ {num2} =
          </h1>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full md:w-2/3 text-center text-4xl md:text-6xl lg:text-7xl border border-green-300 rounded-2xl bg-gray-200 my-4 px-2 py-1"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={gameOver}
            />
            <button
              type="submit"
              className="border rounded-3xl mt-4 text-xl md:text-2xl lg:text-3xl text-gray-800 bg-green-400 px-4 py-2 hover:bg-green-600"
              disabled={!answer}
            >
              Submit
            </button>
            </form>
            <p className="mt-8">
                Score: {score} / {questionCount}
            </p>
            <p className="mb-2">
            Time Remaining: {Math.floor(timeRemaining / 60)}:
            {timeRemaining % 60 < 10 ? `0${timeRemaining % 60}` : timeRemaining % 60}
            </p>
            </div>
        </div>
        {gameOver && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>
    <div className="bg-white w-1/2 md:w-1/3 lg:w-1/4 rounded-lg z-50 p-4">
      {!isNameEntered && (
        <form onSubmit={handleSubmitName}>
          <h2 className="text-2xl font-bold mb-2">Game Over</h2>
          <p className="font-bold mb-2">
            Score: {score} / {questionCount}
          </p>
          <label className="block mb-2">
            <span className="font-bold">Name:</span>
            <input type="text" className="popup-input ml-2 border border-gray-400 rounded-md p-1" value={userName} onChange={(event) => setUserName(event.target.value)} />
          </label>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md"
            disabled={!userName}
          >
            Submit
          </button>
        </form>
      )}
      {isNameEntered && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Thank you for playing, {userName}!</h2>
          <p className="font-bold mb-2">
            Score: {score} / {questionCount}
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md"
            onClick={() => {
              setTimeRemaining(60 * 5); // Reset to 5 minutes
              setIsNameEntered(false);
              setUserName('');
              setGameOver(false);
              alert(`Your score is ${score} / ${questionCount}`);
              window.location.reload();
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  </div>
)}



    </div>
    );
};

export default Division;


