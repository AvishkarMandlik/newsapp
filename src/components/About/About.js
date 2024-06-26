import React from "react";

const About = () => {
  return (
    <div className="container mt-4 pt-4">
      <div className="about-section text-center">
        <h2 className="display-4 mb-4">About Us</h2>
        <div className="container">
          <p className="lead">
            Welcome to News App, your number one source for all things news.
            We're dedicated to providing you the very best of news, with an
            emphasis on reliability, accuracy, and the latest updates.
          </p>
          <p>
            Founded in 2023, News App has come a long way from its beginnings.
            When we first started out, our passion for delivering up-to-date
            news drove us to start our own business.
          </p>
          <p>
            We hope you enjoy our news articles as much as we enjoy offering
            them to you. If you have any questions or comments, please don't
            hesitate to contact us.
          </p>
          <p>
            <strong>Sincerely,</strong>
            <br />
            The News App Team
          </p>
          <hr className="my-4" />
          <h3 className="mb-3">About Our React News App</h3>
          <p>
            Our News App is built using React, a popular JavaScript library
            for building user interfaces. With React, we ensure a fast and
            responsive experience for our users, allowing you to stay updated
            with the latest headlines effortlessly.
          </p>
          <p>
            We use NewsAPI to fetch the latest news from a variety of trusted
            sources around the world. This ensures that you receive the most
            current and reliable news updates in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;