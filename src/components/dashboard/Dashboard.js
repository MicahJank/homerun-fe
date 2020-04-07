import React from "react";
import TodoList from "./todos/TodoList.js";
import { Button } from "semantic-ui-react";

import "../../SASS/Dashboard.scss";

const Dashboard = props => {
  return (
    <section className="ui container">
      <h1>Dashboard</h1>
      <TodoList />
    </section>
  );
};

export default Dashboard;
