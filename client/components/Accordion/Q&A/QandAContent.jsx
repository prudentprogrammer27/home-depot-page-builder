import { useEffect, useState } from 'react';
import axios from 'axios';
import './QandAContent.css'
import QAHeader from './Q&AComponents/QAHeader/Q&A-Header.jsx';
import Navigation from './Q&AComponents/QANavigation/Q&A-Navigation.jsx';
import QandAQuestions from './Q&AComponents/QAQuestions/Q&A-Question.jsx';
import QAAnswer from './Q&AComponents/QAAnswer/Q&A-Answers.jsx';
import QAFooter from './Q&AComponents/QAFooter/Q&A-Footer.jsx';

const QandAContent = ({ currentProduct }) => {
  const [ questionDB, setQuestionDB ] = useState([]);

  useEffect(() => {
    const fetchQA = async () => {
      try {
        const response = await axios.get(`/api/customer_questions/${currentProduct.id}`);
        setQuestionDB(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchQA();
  }, [currentProduct]);
  console.log('parentDb', questionDB)
  console.log('parentCP', currentProduct)
 return (
    <div>
      <div id="accordion-qa">
        <QAHeader />
        <Navigation />
        <QandAQuestions questionDB={questionDB} />
        {/* <QandAQuestions currentProduct={currentProduct}/>
        <QandAQuestions currentProduct={currentProduct}/>
        <QandAQuestions currentProduct={currentProduct}/> */}
        <QAAnswer />
        <QAFooter />
        {/* <ul>
          {questionDB.map((questions) => (
            <li className="QandA" key={questionDB[0].question_content}>
              {questionDB[0].question_content}
            </li>
          ))}
        </ul> */}
        <ul>
          {questionDB.length > 0 && (
            <li className="QandA" key={questionDB[1].question_content}>
              {questionDB[1].question_content}
              </li>
          )}

        </ul>
        <ul>
          {questionDB.length > 0 && (
            <li className="QandA" key={questionDB[1].user_name}>
              {questionDB[1].user_name}
              </li>
          )}
        </ul>
        <ul>
          {questionDB.length > 0 && (
            <li className="QandA" key={questionDB[1].question_date}>
              {questionDB[1].question_date}
              </li>
          )}
        </ul>
        <ul>
          {questionDB.length > 0 && (
            <li className="QandA" key={questionDB[1].response_content}>
              {questionDB[1].response_content}
              </li>
          )}
        </ul>
        <ul>
          {questionDB.length > 0 && (
            <li className="QandA" key={questionDB[1].response_user_name}>
              {questionDB[1].response_user_name}
              </li>
          )}
        </ul>
        <ul>
          {questionDB.length > 0 && (
            <li className="QandA" key={questionDB[1].response_date}>
              {questionDB[1].response_date}
              </li>
          )}
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