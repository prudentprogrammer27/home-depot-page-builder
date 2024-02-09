import { useEffect, useState } from 'react';
import './QAQuestion.css';

const QandAQuestions = ({ questionDB }) => {
  // const [questionDB, setQuestionDB] = useState()
  // const [currentProduct, setCurrentProduct] = useState()
  console.log('childDB', questionDB)
  // console.log('childCP', currentProduct)
    return (
        <div id="qaQuestionCont">
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
              <div id="qaDropDownCaret">
                <img
                  src="https://assets.thdstatic.com/images/v1/caret-brand-small.svg"
                  // alt="caret"
                  // className={`toggleImg ${isActive ? 'rotate' : ''}`}
                  // height="16"
                  // width="16"
                  // loading="lazy"
                />
              </div>
          </div>
        </div>
    )
}

export default QandAQuestions;