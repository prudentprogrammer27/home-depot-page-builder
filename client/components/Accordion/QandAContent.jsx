import { useEffect, useState } from 'react';
import axios from 'axios';
import './QandAContent.css'

const QandAContent = ({ currentProduct }) => {
  const [ questions, setQuestions ] = useState([])

  useEffect(() => {
    const fetchQA = async () => {
      try {
        const response = await axios.get(`/api/customer_questions/${currentProduct.id}`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchQA();
  }, [currentProduct]);

 return (
      <div id="accordion-qa">
        {/* QA HEADER */}
        <div id="qaHeaderCont">
          <div id="qaHeaderSlim">
            <div id="qaHeaderLeft">
              <div id="qaHeaderLeftSub">
                <div id="qaHeaderLeftSubLeft"></div>
                <div id="qaHeaderLeftSubRight"></div>
              </div>
            </div>
              <div id="qaHeaderMiddle"></div>
              <div id="qaHeaderRight">
                <div id="qaHeaderRightCont">
                  <div id="qaHeaderRightBtnBox">
                    <div id="qaHeaderRightText"></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/* NAVIGATION BAR*/}
        <div id="qaNavCont">
          <div id="qaNavSlim">
            <div id="qaNavLeft">
              <div id="qaNavLeftSub"></div>
            </div>
            <div id="qaNavRight">
              <div id="qaNavRightDropDown"></div>
            </div>
          </div>
        </div>
        {/* QUESTION DISPLAY */}
        <div id="qaQuestionCont">
          <div id="qaQuestionLeft">
            <div id="qaQuestionLeftTop">
              <div id="qaQuestionLeftTopQuestion"></div>
            <div id="qaQuestionLeftBottom">
              <div id="qaQuestionLeftBottomSub"></div>
            </div>
            </div>
          </div>
          <div id="qaQuestionRight">
            <div id="qaQuestionRightSub">
              <div id="qaQuestionRightCount"></div>
            </div>
          </div>
        </div>
       
        {/* ANSWER BOX (switch statement) */}
        <div id="qaAnswerCont">
          <div id="qaAnswerTop">
            <div id="qaAnswerTopLeft">
              <div id="qaAnswerTopLeftTop"></div>
              <div id="qaAnswerTopLeftBottom">
                <div id="qaAnswerTopLeftBottomLeft"></div>
              </div>
              <div id="qaAnswerTopRight"></div>
              <div id="qaAnswerBottom">
                <div id="qaAnswerBottomLeft"></div>
                <div id="qaAnswerBottomRight"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Q&A FOOTER */}
        <div id="qaDropDownFooter">
          <div id="qaDropDownFooterSub">
            <div id="qaDropDownFooterSubTop"></div>
            <div id="qaDropDownFooterBottom"></div>
          </div>
        </div>

        {/* <h2>Q & A:</h2>
        <ul>
          {questions.map((questions) => (
            <li className="QandA" key={questions.question_content}>
              {questions.response_content}
            </li>
          ))}
        </ul> */}

       
      </div>
    );
};

export default QandAContent;