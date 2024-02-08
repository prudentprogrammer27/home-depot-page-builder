import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAQuestion.css'

const QandAQuestions = ({ question }) => {
    return (
        <div id="qaQuestionCont">
          <div id="qaQuestionLeft">
            <div id="qaQuestionLeftTop">
              <div id="qaQuestionLeftTopQuestion"></div>
            <div id="qaQuestionLeftBottom">
              <div id="qaQuestionLeftBottomSub"></div>
            </div>
            </div>
          <div id="qaQuestionRight">
            <div id="qaQuestionRightSub">
              <div id="qaQuestionRightCount"></div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default QandAQuestions;