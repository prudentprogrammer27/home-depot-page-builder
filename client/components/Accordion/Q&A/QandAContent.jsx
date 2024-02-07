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
    <div>
        {/* QA HEADER */}
      <div id="accordion-qa">
        <div id="qaHeaderCont">
          <div id="qaHeaderSlim">
            <div id="qaHeaderLeft">
              <div id="qaHeaderLeftSub">
                <div id="qaHeaderLeftSubLeft">33</div>
                <div id="qaHeaderLeftSubRight">Questions</div>
              </div>
            </div>
              <div id="qaHeaderMiddle">
                <input
                  id="searchStuff"
                  type="text"
                  // id="searchInput"
                  placeholder="   Search Questions & Answers"
                />
                <button onClick={() => performSearch()}>
                  <img src="\components\Accordion\Q&A\Q&A-images\Search-glass.png" alt="Search Icon" />
                </button>
              </div>
              <div id="qaHeaderRight">Ask a Question</div>
          </div>
        </div>
        {/* NAVIGATION BAR*/}
        <div id="qaNavCont">
          <div id="qaNavSlim">
            <div id="qaNavLeft">
              <div id="qaNavLeftSub">Showing 1-4 of 33</div>
            </div>
            <div id="qaNavRight">
              <div id="qaNavRightDropDown">
                <select id="dropdown">
                  <option value="newest">Newest Questions</option>
                  <option value="oldest">Oldest Questions</option>
                  <option value="answered">Most Answered</option>
                  <option value="helpful">Most Helpful</option>
                  <option value="featured">Featured Questions</option>
                  <option value="answer">Can you answer these questions?</option>
                </select>
              </div>
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
          <div id="qaQuestionRight">
            <div id="qaQuestionRightSub">
              <div id="qaQuestionRightCount"></div>
            </div>
          </div>
          </div>
        </div>
       
        {/* ANSWER BOX (switch statement) */}
        <div id="qaAnswerCont">
          <div id="qaAnswerSlim">
            <div id="qaAnswerTop">
              <div id="qaAnswerTopLeft"></div>
            </div>
            <div id="qaAnswerMiddle">
              <div id="qaAnswerMiddleTop"></div>
              <div id="qaAnswerMiddleBottom"></div>
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
            <div id="qaDropDownFooterSubTop">
              <div class="pagination">
                {/* <a href="#" class="prev">&lt;</a> */}
                <a href="#" class="page active">1</a>
                <a href="#" class="page">2</a>
                <a href="#" class="page">3</a>
                <a href="#" class="page">4</a>
                <a href="#" class="next">&gt;</a>
              </div>
            </div>
            <div id="qaDropDownFooterBottom">Showing 1-4 of 33</div>
          </div>
        </div>

        <h2>Q & A:</h2>
        <ul>
          {questions.map((questions) => (
            <li className="QandA" key={questions.question_content}>
              {questions.response_content}
            </li>
          ))}
        </ul>

       
      </div>
    </div>
      
    );
};

export default QandAContent;