import React from "react";

const Generate = () => {
  return (
    <main className="page generate-page container">
      <button className="generate-btn">
        <span className="outer"></span>
        <span className="inner">Go</span>
      </button>
      <div className="result">
        <h2>Title</h2>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ul>
      </div>
    </main>
  );
};

export default Generate;
