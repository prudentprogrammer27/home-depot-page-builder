import { useEffect, useState } from 'react';
import axios from 'axios';
import './QAHeader.css'

const QAHeader = ({}) => {
    return (
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
    );
};


export default QAHeader;