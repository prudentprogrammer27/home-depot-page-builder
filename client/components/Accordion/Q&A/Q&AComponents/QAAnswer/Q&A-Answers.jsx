import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAAnswer.css';

const QAAnswer = ({}) => {


    return (
        <div id="qaAnswerCont">
          <div id="qaAnswerSlim">
            <div id="qaAnswerTop">
              <div id="qaAnswerTopLeft">Answer this question</div>
            </div>
            <div id="qaAnswerMiddle">
              <div id="qaAnswerMiddleTop">
                <div id="qaAnswerMiddleTopLeft">A: </div>
                <div id="qaAnswerMiddleTopBottom">
                  <div id="qaAnswerMiddleTopBottomLeft">by</div>
                  <div id="qaAnswerMiddleTopBottomMiddle">RYOBI</div>
                  <div id="qaAnswerMiddleTopBottomRight">| DATE</div>
                </div>
              </div>
              <div id="qaAnswerMiddleBottom"></div>
              <div id="qaAnswerBottom">
                <div id="qaAnswerBottomLeft">Helpful?</div>
                <div id="qaAnswerBottomRight">Report</div>
              </div>
            </div>
          </div> 
        </div>
    )
};

export default QAAnswer;