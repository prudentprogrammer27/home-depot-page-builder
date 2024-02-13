import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAAnswer.css';



const QAAnswer = ({ currentQuestion }) => {
  console.log('currentQuestion at QAAnswer component', currentQuestion);
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  useEffect (()=> {
  },[currentQuestion]);

    return (
        <div className="qaAnswerCont">
            <div key={currentQuestion.id} className="qaAnswerSlim">
              <div className="qaAnswerTop">
                <div className="qaAnswerTopLeft">Answer this question</div>
              </div>
              <div className="qaAnswerMiddle">
                <div className="qaAnswerMiddleTop">
                  <div className="qaAnswerMiddleTopLeft">A: {currentQuestion.response_content} </div>
                  <div className="qaAnswerMiddleTopBottom">
                    <div className="qaAnswerMiddleTopBottomLeft">by</div>
                    <div className="qaAnswerMiddleTopBottomMiddle">{currentQuestion.response_user_name}</div>
                    <div className="qaAnswerMiddleTopBottomRight">| {currentQuestion.response_date}</div>
                  </div>
                </div>
                <div className="qaAnswerMiddleBottom"></div>
                <div className="qaAnswerBottom">
                  <div className="qaAnswerBottomLeft">Helpful?</div>
                  <div className="qaAnswerBottomRight">Report</div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default QAAnswer;