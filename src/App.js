import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li class="dropdown">
            <a href="#ScrumTeam" class="dropbtn">
              Scrum Team
            </a>
            <div class="dropdown-content">
              <a href="#ScrumMaster">Srum Master</a>
              <a href="#ProductOwner">Product Owner</a>
              <a href="#DevelopmentTeam">Development Team</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#Ceremonies" class="dropbtn">
              Ceremonies
            </a>
            <div class="dropdown-content">
              <a href="#Daily">Daily Scrum</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#Artifacts:void(0)" class="dropbtn">
              Artifacts
            </a>
            <div class="dropdown-content">
              <a href="#">Product Backlog</a>
              <a href="#">Spring Backlog</a>
            </div>
          </li>
        </ul>
        <h1 className="Pagetitle">Working Agile - SCRUM </h1>
        <p>
          This page is for everyone who wants to get a deeper understanding of
          how working agile with SCRUM works. You can also use it to prepare for
          the Professional Scrum Developer Certification <b>(PSD)</b>. You can
          either use the Navigationbar at the top or scroll through the page.
        </p>

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
          within the team follows a common goal, adheres the same norm and rules
          and shows respect to each other.
        </p>
        <h3 className="App-intro" id="ScrumMaster">
          Scrum Master
        </h3>
        <div>
          A scrum master is the facilitator for an agile development team. Scrum
          is a methodology that allows a team to self-organize and make changes
          quickly, in accordance with agile principles. The scrum master manages
          the process for how information is exchanged.{" "}
        </div>
        <h3 className="App-intro" id="ProductOwner">
          Product Owner
        </h3>
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
        <h3 className="App-intro" id="DevelopmentTeam">
          Development Team
        </h3>
        <div>
          Development Teams are structured and empowered by the organization to
          organize and manage their own work. The resulting synergy optimizes
          the Development Team’s overall efficiency and effectiveness.
        </div>
        <h2 id="Artifacts">ARTIFACTS</h2>
        <div align="center">
          <h3 className="App-intro">Product Backlog</h3>
          <p>
            The Product Backlog is an ordered list of everything that is known
            to be needed in the product. <br />
            It is the single source of requirements for any changes to be made
            to the product. The Product Owner is responsible for
            <br />
            the Product Backlog, including its content, availability, and
            ordering. A Product Backlog is never complete.
            <br />
            The earliest development of it lays out the initially known and
            best-understood requirements. The Product Backlog evolves <br />
            as the product and the environment in which it will be used evolves.
            The Product Backlog is dynamic; it constantly changes to identify
            what the product needs to be appropriate, competitive, and useful.
            If a product exists, its Product Backlog also exists.
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
              <th align="left">
                <ul>
                  <li>contains all requirements</li>
                  <li>quality of the Product Backlog is very crucial</li>
                  <li>product owner is responsible</li>
                  <li>it is a dynamic list</li>{" "}
                </ul>
              </th>
            </tr>
          </table>
        </div>
        <div>
          <h3 className="App-intro">Sprint Backlog</h3>
          <p>
            The Sprint Backlog is the set of Product Backlog items selected for
            the Sprint, plus a plan for delivering the product Increment and
            realizing the Sprint Goal. The Sprint Backlog makes visible all the
            work that the Development Team identifies as necessary to meet the
            Sprint Goal. To ensure continuous improvement, it includes at least
            one high priority process improvement identified in the previous
            Retrospective meeting. The Sprint Backlog is a plan with enough
            detail that changes in progress can be understood in the Daily
            Scrum. The Development Team modifies the Sprint Backlog throughout
            the Sprint. Only the Development Team can change its Sprint Backlog
            during a Sprint. The Sprint Backlog is a highly visible, real-time
            picture of the work that the Development Team plans to accomplish
            during the Sprint, and it belongs solely to the Development Team.
          </p>
          <img
            src="CN2.png"
            alt="SprintBacklog Kanban"
            width="600"
            height="300"
          />
        </div>

        <h2 id="Ceremonies">CEREMONIES</h2>
        <h3 id="Daily" className="App-intro">
          Daily Scrum
        </h3>
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
        {/* <h2 id="Artifacts">ARTIFACTS</h2> */}
      
      <h2 id="Artifacts">ARTIFACTS</h2>
      <div align="center">
        <h3 className="App-intro">Product Backlog Item</h3>
        <p>
        In Scrum, a product backlog item ("PBI", "backlog item", or "item") is a unit of work small 
        enough to be completed by a team in one Sprint iteration. Backlog items are decomposed into one or more tasks. <br />
        The Development Team is responsible for all estimates. The Product Owner may influence the 
        Development Team by helping it understand and select trade-offs, but the people who will 
        perform the work make the final estimate.
          <br />
         
        </p>
        <p>
        <table>
            <tr>
              <th>
                <img
                  src="PBI.jpg"
                  alt="Product Backlog Item"
                  width="400"
                  height="300"
                />
              </th>
              <th align="left">
                <ul>
                  <li>--Each PBI has to be estimated by the dev team. Items of different sizes are added to the Product Backlog</li>
                  
                  <li>--Then we check the items on the top of the Product Backlog, 
                    and if they are large, we’ll break them down into smaller items</li>
                  <li>--We leave the large items on the bottom of the Product Backlog as they are for now.</li>
                  
                </ul>
              </th>
            </tr>
          </table>

        </p>
        </div>
        <div align="center">
        <h3 className="App-intro">Software Version Control</h3>
        <p>
        Version control systems are a category of software tools that help a software team manage changes to source code over time.<br /> 

If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing <br />disruption to all team members.

Version control protects source code from both catastrophe and the casual degradation of human error and unintended consequences.

          <br />
          <table>
            <tr>
              <th>
                <img
                  src="git.png"
                  alt="GIT"
                  width="400"
                  height="600"
                />
              </th>
              <th align="left">
              <img
                  src="SVC.png"
                  alt="GIT"
                  width="600"
                  height="300"
                />
              </th>
            </tr>
          </table>
        </p>
        
            
      

</div>



        </div>
    );
  }
}

export default App;
