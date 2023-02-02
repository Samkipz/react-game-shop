import React, { useState, useEffect } from "react";
import userService from "../../services/user.service";
import { Header, Slider, TitleList } from "../../component";


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  console.log(content)

  return (
    <div className="homepage">
      <Header></Header>
      <Slider></Slider>
      <TitleList title="Top Games" />
      <TitleList title="Trending now" />
      <TitleList title="Most Played" />
    </div>
  );
};

export default Home;
