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
          
        </div>
      </div>
    </div>
  );
};

export default About;