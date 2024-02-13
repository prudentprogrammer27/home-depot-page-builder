import { useEffect, useState } from 'react';
import './QAQuestion.css';
import QAAnswer from '../QAAnswer/Q&A-Answers';

const QandAQuestions = ({ questionDB }) => {
  const [ displayAnswers, setDisplayAnswers ] = useState({});
  
  console.log('childDB', questionDB)
  
  useEffect (()=> {
    const inititalDisplayState = {}
    questionDB.forEach(question => {
      inititalDisplayState[question.id] = false;
    })
    setDisplayAnswers(inititalDisplayState);
  },[questionDB]);
  
  const handleClick = (event, questionId) => {
    event.stopPropagation();
    setDisplayAnswers(prevState => ({
      ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };

  const showQuestions = () => {
    console.log("Show Questions questionDB", questionDB);
 
  }
console.log('questionseffect', questionDB)
return (
  questionDB.slice(0,4).map((question, index) => {

    return (

    <div className="qaQuestionCont" onClick={(event)=> handleClick(event, question.id)}>
    <div className="qaQuestionLeft">
      <div className="qaQuestionLeftTop">
        <div className="qaQuestionLeftTopQ">Q:</div>
        <div className="qaQuestionLeftTopQuestion">{question.question_content}</div>
        <div className="qaQuestionLeftBottom"> 
          <div className="qaQuestionLeftBottomSub">
            <div className="qaQuestionLeftBottomSubLeft">by</div>
            <div className="qaQuestionLeftBottomSubMiddle">{question.user_name}</div>
            <div className="qaQuestionLeftBottomSubRight">| {question.question_date.slice(0,10)}</div>
          </div>
        </div>
      </div>
      <div className="qaQuestionRight">
        <div className="qaQuestionRightSub">
          <div className="qaQuestionRightCount"> 1 Answer</div>
        </div>
      </div>
      <div className="qaDropDownCaret">
        <img
          src="https://assets.thdstatic.com/images/v1/caret-brand-small.svg"
          alt="caret"
          className={`toggleImg ${displayAnswers[question.id] ? 'rotate' : ""}`}
          height="16"
          width="16"
          loading="lazy"
        />
      </div>
    </div>
    {displayAnswers[question.id] && <QAAnswer currentQuestion={question}/>}
    {/* I want the answer to the current question --- pass in questionID=question.id */}
  </div>
    )
  })
)
}

export default QandAQuestions;
