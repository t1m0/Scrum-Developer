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
        <div align="center">
        <h3 className="App-intro">Product Backlog</h3>
        <p>
        The Product Backlog is an ordered list of everything that is known to be needed in the product. <br></br>
        It is the single source of requirements for any changes to be made to the product. The Product Owner is responsible for<br></br>
        the Product Backlog, including its content, availability, and ordering. A Product Backlog is never complete.<br></br>
        The earliest development of it lays out the initially known and best-understood requirements. The Product Backlog evolves <br></br>
        as the product and the environment in which it will be used evolves. The Product Backlog is dynamic; it constantly changes to identify what the product needs to be appropriate, competitive, and useful. If a product exists, its Product Backlog also exists.
        </p>

        <table>
          <tr>
            <th>
              <img
                src="CN1.jpg"
                alt="Product Owner responsibilities"
                width="600"
                height="300"
               />
              </th>
            <th align="left"><ul><li>contains all requirements</li>
                    <li>quality of the Product Backlog is very crucial</li>
                    <li>product owner is responsible</li>
                    <li>it is a dynamic list</li> </ul></th>
          </tr>
        </table>
          
        </div>
        <div>
        <h3 className="App-intro">Product Backlog</h3>
        <p>
        The Sprint Backlog is the set of Product Backlog items selected for the Sprint, plus a plan for delivering the product Increment and realizing the Sprint Goal.
        The Sprint Backlog makes visible all the work that the Development Team identifies as necessary to meet the Sprint Goal. To ensure continuous improvement, it includes at least one high priority process improvement identified in the previous Retrospective meeting.
        The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum. The Development Team modifies the Sprint Backlog throughout the Sprint.  Only the Development Team can change its Sprint Backlog during a Sprint. The Sprint Backlog is a highly visible, real-time picture of the work that the Development Team plans to accomplish during the Sprint, and it belongs solely to the Development Team.
        </p>
        </div>

      </div>

    );
  }
}

export default App;
