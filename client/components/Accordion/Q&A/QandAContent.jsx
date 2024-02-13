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

 return (
    <div>
      <div id="accordion-qa">
        <QAHeader />
        <Navigation />
        <QandAQuestions questionDB={questionDB} />
        {/* <QAAnswer questionDB={questionDB}/> */}
        <QAFooter />
      </div>
    </div>
    );
};

export default QandAContent;