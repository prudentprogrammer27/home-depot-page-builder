import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAFooter.css';

const QAFooter = ({}) => {
    return (
        <div id="qaDropDownFooter">
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
      </div>
    )
}

export default QAFooter;