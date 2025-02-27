import { useState } from "react";
import { answerT } from "./types/question";
import Layout from "./layout";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {

  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<answerT[]>([]);

  const reset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setDone(false);
    setAnswers([]);
  }


  const onDone = () => {
    setDone(true);
  }

  return (
    <Layout>
      {done ? (
          <Result
              score={score}
              reset={reset}
          />
       ) :(
        <Quiz 
          setAnswers={setAnswers} 
          setScore={setScore} 
          setCurrentQuestion={setCurrentQuestion}
          done={onDone}
          currentQuestion={currentQuestion}
          answers={answers}
          />
       )}    
    </Layout>
  );
    

}

export default App
