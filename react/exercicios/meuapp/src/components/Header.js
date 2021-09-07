import React from "react";

const Home = ({ link, text}) => {
  return (
      <p>
        <a href={link}>{text}</a>
      </p>
  )
}

export default Home;