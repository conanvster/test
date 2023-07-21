import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Histogram} from "./histogram/Histogram";
import {SecondHistogram} from "./histogram/SecondHistogram";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Histogram />*/}
      <div style={{height: "150px"}}></div>
    <div className="container" id="histogram">
        <SecondHistogram />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
