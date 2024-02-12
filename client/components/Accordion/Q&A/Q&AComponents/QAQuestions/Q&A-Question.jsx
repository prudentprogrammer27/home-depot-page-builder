import { useEffect, useState } from 'react';
import './QAQuestion.css';
import QAAnswer from '../QAAnswer/Q&A-Answers';

const QandAQuestions = ({ questionDB }) => {
  const [ displayAnswer, setDisplayAnswer ] = useState(false)

  // create handleClick function to stop propagation, switch caret, conditional render answer
  const handleClick = (event) => {
    // stop propagation
    event.stopPropagation();
    // change state on click
    setDisplayAnswer(!displayAnswer);
  };

  console.log('childDB', questionDB)
  if (!questionDB || questionDB.length < 2) {
    // Render a placeholder or loading state when questionDB is empty or insufficient
    return <div>Loading...</div>;
  }

  return (
    <div id="qaQuestionCont" onClick={handleClick}>
      <div id="qaQuestionLeft">
        <div id="qaQuestionLeftTop">
          <div id="qaQuestionLeftTopQ">Q:</div>
          <div id="qaQuestionLeftTopQuestion">{questionDB[1].question_content}</div>
          <div id="qaQuestionLeftBottom"> 
            <div id="qaQuestionLeftBottomSub">
              <div id="qaQuestionLeftBottomSubLeft">by</div>
              <div id="qaQuestionLeftBottomSubMiddle">{questionDB[1].user_name}</div>
              <div id="qaQuestionLeftBottomSubRight">| {questionDB[1].question_date.slice(0,10)}</div>
            </div>
          </div>
        </div>
        <div id="qaQuestionRight">
          <div id="qaQuestionRightSub">
            <div id="qaQuestionRightCount"> 1 Answer</div>
          </div>
        </div>
        <div id="qaDropDownCaret">
          <img
            src="https://assets.thdstatic.com/images/v1/caret-brand-small.svg"
            alt="caret"
            className={`toggleImg ${displayAnswer ? 'rotate' : ""}`}
            height="16"
            width="16"
            loading="lazy"
          />
        </div>
      </div>
      {displayAnswer && <QAAnswer questionDB={questionDB} />}
    </div>
  );
}

export default QandAQuestions;
