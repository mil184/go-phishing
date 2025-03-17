import Email from "../components/Email";
import TextMessage from "../components/TextMessage";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Question = () => {
    const { id } = useParams();
    const { data: question, isPending, error } = useFetch("http://localhost:8000/questions/" + id);
    const [score, setScore] = useState(0);

    const [isCorrect, setIsCorrect] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        setIsCorrect(null);
        setShowExplanation(false);
    }, [question]);

    function handleButtonClick(input){
        if (question){
            const correct = input === !question.isPhishing;
            setShowExplanation(true);
            setIsCorrect(correct);
            if (correct){
                setScore(score+1);
            }
        }    
    }

    const finishQuiz = () => {
        sessionStorage.setItem("score", score);
    };

    if (question){
        return(
            <div>
                <div className="question-header">
                    <h2>Pitanje {question.id}/5</h2>
                        {!showExplanation && <p>{question.description}</p>}

                        {showExplanation && (
                            <div className="redirection">
                                <div id={isCorrect ? "correct-answer" : "incorrect-answer"} style={{ display: "block" }}>
                                <p>{isCorrect ? question.correctAnswerMessage : question.incorrectAnswerMessage}</p>
                                </div>
                                <button className="link-button">
                                    {Number(question.id) === 5 ? 
                                        (<Link to="/end" onClick={finishQuiz}>Završi kviz</Link>) : 
                                        (<Link to={"/questions/" + (Number(question.id) + 1)}>Sledeće Pitanje</Link>)}
                                </button>
                            </div>
                            
                        )}

                        {!showExplanation && (
                            <div className="buttons">
                                <button className="link-button" onClick={() => handleButtonClick(true)}>Stvarno</button>
                                <button className="link-button" onClick={() => handleButtonClick(false)}>Lažno</button>    
                            </div>
                        )} 
                </div>

                {question.type === "email" && <Email question={question} />}
                {question.type === "text-message" && <TextMessage question={question} />}   

            </div>
        )
    }
}
 
export default Question;