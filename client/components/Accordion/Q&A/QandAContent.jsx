import { useEffect, useState } from 'react';
import axios from 'axios';
import './QandAContent.css'
import QAHeader from './Q&AComponents/QAHeader/Q&A-Header.jsx';
import Navigation from './Q&AComponents/QANavigation/Q&A-Navigation.jsx';
import QandAQuestions from './Q&AComponents/QAQuestions/Q&A-Question.jsx';
import QAAnswer from './Q&AComponents/QAAnswer/Q&A-Answers.jsx';
import QAFooter from './Q&AComponents/QAFooter/Q&A-Footer.jsx';

const QandAContent = ({ currentProduct }) => {
  const [ questionInfo, setQuestionInfo ] = useState([]);

  useEffect(() => {
    const fetchQA = async () => {
      try {
        const response = await axios.get(`/api/customer_questions/${currentProduct.id}`);
        setQuestionInfo(response.data);
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
        <QandAQuestions />
        <QandAQuestions />
        <QandAQuestions />
        <QAAnswer />
        <QAFooter />
        <ul>
          {questionInfo.map((questions) => (
            <li className="QandA" key={questionInfo[0].question_content}>
              {questionInfo[0].question_content}
            </li>
          ))}
        <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].question_content}>
              {questionInfo[1].question_content}
              </li>
          )}

        </ul>
        <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].user_name}>
              {questionInfo[1].user_name}
              </li>
          )}
        </ul>
        <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].question_date}>
              {questionInfo[1].question_date}
              </li>
          )}
        </ul>
        <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].response_content}>
              {questionInfo[1].response_content}
              </li>
          )}
        </ul>
        <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].response_user_name}>
              {questionInfo[1].response_user_name}
              </li>
          )}
        </ul>
        <ul>
          {questionInfo.length > 0 && (
            <li className="QandA" key={questionInfo[1].response_date}>
              {questionInfo[1].response_date}
              </li>
          )}
        </ul>
        </ul> 
      </div>
      
    </div>
      
    );
};

export default QandAContent;


// <div className="zone-card">
//       <section className={`panel ${isActive ? 'active' : ''}`} onClick={togglePanel} role="button" tabIndex="0">
//         <div className="panel-header">
//           <h3>{title}</h3>
//           <img
//             src="https://assets.thdstatic.com/images/v1/caret-brand-small.svg"
//             alt="caret"
//             className={`toggleImg ${isActive ? 'rotate' : ''}`}
//             height="16"
//             width="16"
//             loading="lazy"
//           />
//         </div>
//         {isActive && renderContent()}
//       </section>
//       </div>