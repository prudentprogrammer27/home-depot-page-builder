import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAAnswer.css';

const QAAnswer = ({}) => {
    return (
        <div id="qaAnswerCont">
          <div id="qaAnswerSlim">
            <div id="qaAnswerTop">
              <div id="qaAnswerTopLeft"></div>
            </div>
            <div id="qaAnswerMiddle">
              <div id="qaAnswerMiddleTop">
              </div>
              <div id="qaAnswerMiddleBottom"></div>
              <div id="qaAnswerBottom">
                <div id="qaAnswerBottomLeft"></div>
                <div id="qaAnswerBottomRight"></div>
              </div>
            </div>
          </div> 
        </div>
    )
};

export default QAAnswer;