import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAQuestion.css';

const QandAQuestions = ({ question }) => {
  const [ questionInfo, setQuestionInfo ] = useState([]);

    return (
        <div id="qaQuestionCont">
           {/* <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].question_content}>
              {questionInfo[1].question_content}
              </li>
          )}

        </ul> */}
          <div id="qaQuestionLeft">
            <div id="qaQuestionLeftTop">
              <div id="qaQuestionLeftTopQ">Q:</div>
              <div id="qaQuestionLeftTopQuestion">question</div>
            <div id="qaQuestionLeftBottom">
              <div id="qaQuestionLeftBottomSub">
                <div id="qaQuestionLeftBottomSubLeft">by</div>
                <div id="qaQuestionLeftBottomSubMiddle">name</div>
                <div id="qaQuestionLeftBottomSubRight">date</div>
                
              </div>
            </div>
            </div>
          <div id="qaQuestionRight">
            <div id="qaQuestionRightSub">
              <div id="qaQuestionRightCount"> 1 Answer</div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default QandAQuestions;