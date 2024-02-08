import { useEffect, useState } from 'react';
import axios from 'axios';
import './QandAContent.css'
import QAHeader from './Q&AComponents/QAHeader/Q&A-Header.jsx';
import Navigation from './Q&AComponents/QANavigation/Q&A-Navigation.jsx';
import QandAQuestions from './Q&AComponents/QAQuestions/Q&A-Question.jsx';
import QAAnswer from './Q&AComponents/QAAnswer/Q&A-Answers.jsx';
import QAFooter from './Q&AComponents/QAFooter/Q&A-Footer.jsx';

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
      <div id="accordion-qa">
        <QAHeader />
        <Navigation />
        <QandAQuestions />
        <QAAnswer />
        <QAFooter />
        {/* Q&A FOOTER */}
        {/* <div id="qaDropDownFooter">
          <div id="qaDropDownFooterSub">
            <div id="qaDropDownFooterSubTop">
              <div class="pagination">
                <a href="#" class="page active">1</a>
                <a href="#" class="page">2</a>
                <a href="#" class="page">3</a>
                <a href="#" class="page">4</a>
                <a href="#" class="next">&gt;</a>
              </div>
            </div>
            <div id="qaDropDownFooterBottom">Showing 1-4 of 33</div>
          </div>
        </div> */}

        <h2>Q & A:</h2>
        <ul>
          {questions.map((questions) => (
            <li className="QandA" key={questions.question_content}>
              {questions.question_content}
            </li>
          ))}
        </ul>

       
      </div>
    </div>
      
    );
};

export default QandAContent;