import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  return (
    <main className="page about-page container">
      <h2>About</h2>
      <p>
        This website is created by{" "}
        <a
          href="https://mehmetcanaygun.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehmet Can Aygün
        </a>{" "}
        for web developers who want to improve their skills by creating
        websites. Practicing is the best way to learn. Keep building!
      </p>
      <h2>Useful Resources</h2>
      <ul>
        <li>
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Google Fonts
          </a>
        </li>
        <li>
          <a
            href="https://fontawesome.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Font Awesome
          </a>
        </li>
        <li>
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Unsplash
          </a>
        </li>
        <li>
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Pexels
          </a>
        </li>
        <li>
          <a
            href="https://www.videvo.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Videvo
          </a>
        </li>
        <li>
          <a
            href="https://picsum.photos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Lorem Picsum
          </a>
        </li>
        <li>
          <a
            href="https://logomakr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> LogoMakr
          </a>
        </li>
        <li>
          <a
            href="https://www.drawkit.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Drawkit
          </a>
        </li>
        <li>
          <a
            href="https://undraw.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> unDraw
          </a>
        </li>
        <li>
          <a
            href="https://www.cssmatic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> CSS matic
          </a>
        </li>
        <li>
          <a
            href="https://cssgradient.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> CSS Gradient
          </a>
        </li>
        <li>
          <a
            href="https://stripesgenerator.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> CSS Stripes Generator
          </a>
        </li>
        <li>
          <a
            href="https://cubic-bezier.com/#.17,.67,.83,.67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> cubic-bezier
          </a>
        </li>
        <li>
          <a
            href="https://coolors.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Coolors
          </a>
        </li>
        <li>
          <a
            href="https://getwaves.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Get Waves
          </a>
        </li>
        <li>
          <a
            href="https://www.heropatterns.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Hero Patterns
          </a>
        </li>
        <li>
          <a
            href="https://michalsnik.github.io/aos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> AOS Animate On Scroll
            Library
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bradtraversy/design-resources-for-developers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-chevron-right"></i> Brad Traversy - Design
            Resources For Developers
          </a>
        </li>
      </ul>
    </main>
  );
};

export default About;
