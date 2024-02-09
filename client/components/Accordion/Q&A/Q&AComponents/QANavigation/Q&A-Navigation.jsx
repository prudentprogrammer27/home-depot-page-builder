import { useEffect, useState } from 'react';
import axios from 'axios';
import './QANavigation.css';

const Navigation = ({}) => {
    return (
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
    )
};

export default Navigation;