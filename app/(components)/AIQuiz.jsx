"use client"
import React, { useState } from 'react';

const AIQuiz = () => {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleInputChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculate score and verify answers
    let correctAnswers = 0;
    quizData.quiz.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers++;
      }
    });

    const totalQuestions = quizData.quiz.questions.length;
    const userScore = (correctAnswers / totalQuestions) * 100;

    setScore(userScore.toFixed(2)); // Round score to two decimal places
  };

  return (
    <div className="flex justify-center mt-10">
      {score !== null ? (
        <div className="text-center">
          <h2>Your Quiz Score: {score}%</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          {quizData.quiz.questions.map((question, index) => (
            <div key={index} className="mb-4">
              <label>{question.question}</label>
              <div>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="radio"
                      id={`option${optionIndex}`}
                      name={`answer${index}`}
                      value={option}
                      required
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor={`option${optionIndex}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AIQuiz;

const quizData = {
  "quiz": {
    "questions": [
      {
        "question": "What is the first pillar of Islam?",
        "options": [
          "Salat (Prayer)",
          "Zakat (Charity)",
          "Shahada (Declaration of Faith)",
          "Sawm (Fasting)"
        ],
        "answer": "Shahada (Declaration of Faith)"
      },
      {
        "question": "Who is considered the Seal of the Prophets in Islam?",
        "options": [
          "Prophet Musa (Moses)",
          "Prophet Isa (Jesus)",
          "Prophet Ibrahim (Abraham)",
          "Prophet Muhammad peace be upon him"
        ],
        "answer": "Prophet Muhammad peace be upon him"
      },
      // Include more questions similarly
    ]
  }
};
