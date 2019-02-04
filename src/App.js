import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Pagetitle">Working Agile - SCRUM </h1>
        <header className="App-header">
          <h1 className="App-title">Learn more about Scrum!</h1>
          <ul class="nav">
            <p class="nav-item">
              <a class="nav-link active" href="#ScrumTeam">
                Scrum Team
              </a>
            </p>
            <p class="nav-item">
              <a class="nav-link active" href="#Ceremonies">
                Ceremonies
              </a>
            </p>
            <p class="nav-item">
              <a class="nav-link active" href="#Artifacts">
                Artifacts
              </a>
            </p>
          </ul>
        </header>
        <h2 id="ScrumTeam">SCRUM TEAM</h2>
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
        <div align="left">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Product Owner is responsible for
            maximizing the value of the product resulting from work of the
            Development Team. How this is done may vary widely across
            organizations, Scrum Teams, and individuals.
          </p>

          <div align="left">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Product Owner is the sole person
            responsible for managing the Product Backlog. Product Backlog
            management includes:
            <div align="center">
              <img
                src="CN.png"
                alt="Product Owner responsibilities"
                width="700"
                height="450"
              />
            </div>
          </div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Product Owner may do the above
            work, or have the Development Team do it. However, the Product Owner
            remains accountable.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Product Owner is one person, not a
            committee. The Product Owner may represent the desires of a
            committee in the Product Backlog, but those wanting to change a
            Product Backlog item’s priority must
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address the Product Owner.
          </p>
        </div>
        <p align="left">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the Product Owner to succeed, the
          entire organization must respect his or her decisions. The Product
          Owner’s decisions are visible in the content and ordering of the
          Product Backlog. No one can force the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Team to work from a
          different set of requirements.
        </p>
        <h3 className="App-intro">Development Team</h3>
        <div>
          Development Teams are structured and empowered by the organization to
          organize and manage their own work. The resulting synergy optimizes
          the Development Team’s overall efficiency and effectiveness.
        </div>
        <h2 id="Ceremonies">CEREMONIES</h2>
        <h3 className="App-intro">Daily Sprint</h3>
        <p>
          The Daily Scrum is a <b>15-minute</b> time-boxed event for the
          Development Team to <b>synchronize activities and create a plan</b>{" "}
          for the next 24 hours.{" "}
        </p>
        <img src="./images/daily.png" />
        <table className="Daily">
          <tr>
            <th>WHO?</th>
            <td>Development Team, Product Owner optional</td>
          </tr>
          <tr>
            <th>WHEN?</th>
            <td>If possible, every day at the same place</td>
          </tr>
          <tr>
            <th>WHERE?</th>
            <td>If possible, every day at the same time</td>
          </tr>
          <tr>
            <th>WHAT?</th>
            <td>
              {" "}
              <ol>
                <li>What did you do yesterday?</li>
                <li>What will you do today?</li>
                <li>Are there any impediments in your way?</li>
              </ol>
            </td>
          </tr>
          <tr>
            <th>WHY?</th>
            <td>Transparency, inspection, and adaptation</td>
          </tr>
        </table>
        <h2 id="Artifacts">ARTIFACTS</h2>
      </div>
    );
  }
}

export default App;
