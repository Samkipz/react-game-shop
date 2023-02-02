import React, { useState, useEffect } from "react";

// import UserService from "../services/user.service";
import userService from "../../services/user.service";
// import EventBus from "../common/EventBus";
import eventBus from "../../common/EventBus";

const Admin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          eventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <h1>Admin Page</h1>
    </div>
  );
};

export default Admin;
