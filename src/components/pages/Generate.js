import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Generate = () => {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [randTheme, setTheme] = useState("");
  const [randColors, setColors] = useState([]);
  const [randComponents, setComponents] = useState([]);
  const [defs, setDefaults] = useState([]);

  const fetchData = async () => {
    // Get data from file
    setLoading(true);

    const res = await axios.get("./files/gen.json");

    setRandomData(res.data);

    setLoading(false);

    setGenerated(true);
  };

  const setRandomData = ({ theme, colors, components, defaults }) => {
    setTheme(theme[Math.floor(Math.random() * theme.length)]);

    setColors(colors[Math.floor(Math.random() * colors.length)]);

    let compArr = [];
    let componentsClone = [...components];

    for (let i = 0; i < 5; i++) {
      let compToPush =
        componentsClone[Math.floor(Math.random() * componentsClone.length)];

      compArr.push(compToPush);

      // Remove pushed component from componentsClone array
      componentsClone = componentsClone.filter((comp) => comp !== compToPush);
    }

    setComponents(compArr);

    setDefaults(defaults);
  };

  const reset = () => {
    setGenerated(false);
    setLoading(false);
    setTheme("");
    setColors([]);
    setComponents([]);
    setDefaults([]);
  };

  return (
    <main className="page generate-page container">
      <button
        className={generated ? "generate-btn hide" : "generate-btn"}
        onClick={() => fetchData()}
      >
        <span className="outer"></span>
        <span className="inner">{loading ? "Loading" : "Go"}</span>
      </button>
      <div className={generated ? "result show" : "result"}>
        <h2>You can create this!</h2>
        <ul>
          <li>
            <strong>Theme:</strong> {randTheme}
          </li>
          <li>
            <strong>Color Palette: </strong>
            <div className="palette-container">
              {randColors.map((col, index) => (
                <p
                  key={index}
                  className="color-item"
                  style={{ backgroundColor: col }}
                >
                  {col}
                </p>
              ))}
            </div>
          </li>
          <li>
            <strong>Components:</strong>
            <div className="components-container">
              {randComponents.map((comp, index) => (
                <p key={index}>
                  <i className="fas fa-chevron-right"></i> {comp}
                </p>
              ))}
            </div>
          </li>
          <li>
            <strong>Defaults:</strong>
            <div className="defaults-container">
              {defs.map((def, index) => (
                <p key={index}>
                  <i className="fas fa-chevron-right"></i> {def}
                </p>
              ))}
            </div>
          </li>
          <li>
            <strong>Notes:</strong> Websites usually have pages such as{" "}
            <em>Home, About, Projects, Products, Gallery, Contact</em> and so
            on. You can create these pages or create any other type of pages as
            you like. There is no limit. You can use plain HTML, CSS and JS or
            you can use a framework. The goal is improving your skills. You can
            share your website with{" "}
            <span className="hashtag">"#WebsgChallenge"</span> on Twitter or
            Instagram to show your progress with everyone. You can{" "}
            <Link to="/about" className="link">
              <strong>click here</strong>
            </Link>{" "}
            to see free resources that may be useful for you to build your
            website.
          </li>
        </ul>
        <button className="reset-btn" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </main>
  );
};

export default Generate;
