import React, { useState } from 'react';

const PollDisplay = ({ question, answers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [votes, setVotes] = useState(Array(answers.length).fill(0));

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
    

  };

  const handleVote = () => {
    if (selectedAnswer !== null) {
      const updatedVotes = [...votes];
      updatedVotes[selectedAnswer] += 1;
      setVotes(updatedVotes);
      setSelectedAnswer(null);
      alert("Thank You You voted")
    }
  };

  const totalVotes = votes.reduce((sum, voteCount) => sum + voteCount, 0);

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerSelection(index)}>
              {answer}
            </button>
            <span>Votes: {votes[index]}</span>
        </li>
        ))}
      </ul>
      <button onClick={handleVote} disabled={selectedAnswer === null}>
        Vote
      </button>
    </div>
  );
};

export default PollDisplay;
