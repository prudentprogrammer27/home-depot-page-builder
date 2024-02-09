import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAFooter.css';

const QAFooter = ({ }) => {
    return (
        <div id="qaDropDownFooter">
        <div id="qaDropDownFooterSub">
          <div id="qaDropDownFooterSubTop">
            <div className="pagination">
              <a href="#" className="page active">1</a>
              <a href="#" className="page">2</a>
              <a href="#" className="page">3</a>
              <a href="#" className="page">4</a>
              <a href="#" className="next">&gt;</a>
            </div>
          </div>
          <div id="qaDropDownFooterBottom">Showing 1-4 of 33</div>
        </div>
      </div>
    )
}

export default QAFooter;