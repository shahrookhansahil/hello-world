import React from 'react';
import PollDisplay from './PollComponents/PollDisplay';
const App = () => {
  const question = 'What is your favorite programming language?';
  const answers = ['JavaScript', 'Python', 'Java', 'C++'];

  return (
    <div>
      <h1>My Polling App</h1>
      <PollDisplay question={question} answers={answers} />
    </div>
  );
};

export default App;
