import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Pagetitle">SCRUM TEAM</h1>

        <header className="App-header">
          <h2 className="App-title">A Scrum team consists of:</h2>
          <p>Scrum Master</p>
          <p>Product Owner (PO)</p>
          <p>Development Team</p>
        </header>
        <img src="./images/team.png" />
        <h3 className="App-intro">Characteristics of a Scrum Team</h3>
        <div>
          Within the Scrum Framework all work delivered to the customer is done
          by dedicated Scrum Teams. A Scrum Team is a collection of individuals
          working together to deliver the requested and committed product
          increments.
        </div>
        <p>
          To work effectively it is important for a Scrum Team that everyone
          within the team
        </p>
        <ul>
          <span>
            <li>follows a common goal</li>
          </span>
          <li>adheres the same norms and rules</li>
          <li>shows respect to each other</li>
        </ul>
        <h3 className="App-intro">Scrum Master</h3>
        <div>
          A scrum master is the facilitator for an agile development team. Scrum
          is a methodology that allows a team to self-organize and make changes
          quickly, in accordance with agile principles. The scrum master manages
          the process for how information is exchanged.{" "}
        </div>
        <h3 className="App-intro">Product Owner</h3>
        <div>
          The Product Owner is the sole person responsible for managing the
          Product Backlog
        </div>
        <h3 className="App-intro">Development Team</h3>
        <div>
          Development Teams are structured and empowered by the organization to
          organize and manage their own work. The resulting synergy optimizes
          the Development Team’s overall efficiency and effectiveness.
        </div>
        <div />
      </div>
    );
  }
}

export default App;
