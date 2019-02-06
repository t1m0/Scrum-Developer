import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomComponent from "./CustomComponent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li class="dropdown">
            <a href="#ScrumFramework" class="dropbtn">
              Scrum Framework
            </a>
            <div class="dropdown-content">
              <a href="#ScrumTeam">Scrum Team</a>
              <a href="#Artifacts">Artifacts</a>
              <a href="#Ceremonies">Ceremonies</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#ApplicationLifeCycle" class="dropbtn">
              Application Life Cycle
            </a>
            <div class="dropdown-content">
              <a href="#ProductBacklogItem">Product Backlog Item</a>
              <a href="#SoftwareVersionControl">Software Version Control</a>
              <a href="#branch-strategy">Branch Strategy</a>
              <a href="#branchvsmerge">Branching vs. Merging</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#TechnicalEnhancement" class="dropbtn">
              Technical Enhancement
            </a>
            <div class="dropdown-content">
              <a href="#CommonCodeBase">Establish common code base</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#" class="dropbtn">
              Emergent Architecture
            </a>
            <div class="dropdown-content">
              <a href="#BDUF">BDUF</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#QualityCode" class="dropbtn">
              Quality Code
            </a>
            <div class="dropdown-content">
              <a href="#CommitStandards">Commit Standards</a>
              <a href="#qualcodqualsof">
                Quality Code in relation to Quality Software
              </a>
              <a href="#codvsdev">Coding vs. Developing</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#T" class="dropbtn">
              Agile Testing
            </a>
            <div class="dropdown-content">
              <a href="#atdd">ATDD</a>
            </div>
          </li>
        </ul>
        <img src="./images/logo.png" width="200" height="150" />
        <img src="./images/logo2.png" width="200" height="150" />
        <h1 className="Pagetitle" align="center">
          Working Agile - SCRUM{" "}
        </h1>
        <p>
          This page is for everyone who wants to get a deeper understanding of
          how working agile with SCRUM works. You can also use it to prepare for
          the Professional Scrum Developer Certification <b>(PSD)</b>. You can
          either use the Navigationbar at the top or scroll through the page.
        </p>
        <h2 id="ScrumFramework">SCRUM FRAMEWORK</h2>
        <img src="./images/team.png" />
        <h3 id="ScrumTeam" className="App-intro">
          Scrum Team
        </h3>
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
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Scrum Master</h1>
            </div>
            <div className="content-description">
              <img src="./images/kk.jpg" align="center" alt="logo" />
            </div>
          </div>
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
                src="./images/CN.png"
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
        <div />
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Scrum Values</h1>
            </div>
            <div className="content-description">
              <img src="./images/sv.jpg" align="center" alt="logo" />
            </div>
          </div>
        </div>
        <h2 id="Artifacts">ARTIFACTS</h2>
        <div align="center">
          <h3 className="App-intro" id="ProductBacklog">
            Product Backlog
          </h3>
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
                  src="./images/CN1.jpg"
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
        <h3 className="App-intro" id="SprintBacklog">
          Sprint Backlog
        </h3>
        <p>
          The Sprint Backlog is the set of Product Backlog items selected for
          the Sprint, plus a plan for delivering the product Increment and
          realizing the Sprint Goal. The Sprint Backlog makes visible all the
          work that the Development Team identifies as necessary to meet the
          Sprint Goal. To ensure continuous improvement, it includes at least
          one high priority process improvement identified in the previous
          Retrospective meeting. The Sprint Backlog is a plan with enough detail
          that changes in progress can be understood in the Daily Scrum. The
          Development Team modifies the Sprint Backlog throughout the Sprint.
          Only the Development Team can change its Sprint Backlog during a
          Sprint. The Sprint Backlog is a highly visible, real-time picture of
          the work that the Development Team plans to accomplish during the
          Sprint, and it belongs solely to the Development Team.
        </p>
        <img
          src="./images/CN2.png"
          alt="SprintBacklog Kanban"
          width="600"
          height="300"
        />
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Increment</h1>
            </div>
            <div className="content-description">
              <img src="./images/ir.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <h3 id="DefinitionofDone">Definition of Done (DoD)</h3>
        <img
          className="imgDoD"
          src="./images/defDone.png"
          alt="Difinition of Done"
          height="400"
        />
        <table className="DoD">
          <tr>
            <th>Examples of Components in DoD</th>
          </tr>
          <tr>
            <td>Code Complete</td>
          </tr>
          <tr>
            <td>Test Complete</td>
          </tr>
          <tr>
            <td>Approved by Product Owner</td>
          </tr>
          <tr>
            <td>Unit tests written and executed</td>
          </tr>
          <tr>
            <td>Integration tested</td>
          </tr>
          <tr>
            <td>Performance tested</td>
          </tr>
          <tr>
            <td>Documented</td>
          </tr>
        </table>
        <h2 id="Ceremonies">CEREMONIES</h2>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Sprints</h1>
            </div>
            <div className="content-description">
              <img src="./images/sprints.jpg" alt="logo" />
            </div>
          </div>
        </div>
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
                <p>What did you do yesterday?</p>
                <p>What will you do today?</p>
                <p>Are there any impediments in your way?</p>
              </ol>
            </td>
          </tr>
          <tr>
            <th>WHY?</th>
            <td>Transparency, inspection, and adaptation</td>
          </tr>
        </table>
        {/* <h2 id="Artifacts">ARTIFACTS</h2> */}
        <div>
          <h3 id="SprintPlanning" className="App-intro">
            Sprint Planning
          </h3>
          <h4 className="App-intro">
            <c>What is a Sprint Planning?</c>
          </h4>
          Before each sprint there's a <i>time-boxed event</i>, the so called
          Sprint Planning, to plan how much work will be performed in one
          sprint. It is time-boxed to a{" "}
          <i>maximum of eight hours for a one-month sprint</i>. For shorter
          sprints, the event is usually shorter. The entire team agrees to
          <i>complete a set of product backlog items</i>. This agreement defines
          the sprint backlog and is{" "}
          <i>
            based on the team’s velocity or capacity and the length of the
            sprint
          </i>
          .<h4 className="App-intro">Who is attending?</h4>
          It's a collaborative work of the entire Scrum Team. The ScrumMaster
          facilitates the meeting, the Product Owner clarifies the details of
          the product backlog items and their respective acceptance criteria,
          and the Entire Agile Team defines the work and effort necessary to
          meet their sprint commitment.
          <h4 className="App-intro">Why is it neccessary?</h4>
          It answers the following questions: What can be delivered in the
          Increment resulting from the upcoming Sprint? How will the work needed
          to deliver the Increment be achieved? During the Sprint planning the
          work is selected from the Product Backlog and pulled into the Sprint
          Backlog.
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Sprint Review</h1>
            </div>
            <div className="content-description">
              <img src="./images/sr.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Sprint Retrospective</h1>
            </div>
            <div className="content-description">
              <img src="./images/david.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div>
          <h2 id="ApplicationLifeCycle">APPLICATION LIFE CYCLE</h2>
        </div>
        <div>
          <h3 id="ProductBacklogItem" className="App-intro">
            Product Backlog Item
          </h3>
          <p>
            In Scrum, a product backlog item ("PBI", "backlog item", or "item")
            is a unit of work small enough to be completed by a team in one
            Sprint iteration. Backlog items are decomposed into one or more
            tasks. <br />
            The Development Team is responsible for all estimates. The Product
            Owner may influence the Development Team by helping it understand
            and select trade-offs, but the people who will perform the work make
            the final estimate.
            <br />
          </p>
          <p>
            <table>
              <tr>
                <th>
                  <img
                    src="./images/PBI.jpg"
                    alt="Product Backlog Item"
                    width="400"
                    height="300"
                  />
                </th>
                <th align="left">
                  <ul>
                    <li>
                      --Each PBI has to be estimated by the dev team. Items of
                      different sizes are added to the Product Backlog
                    </li>

                    <li>
                      --Then we check the items on the top of the Product
                      Backlog, and if they are large, we’ll break them down into
                      smaller items
                    </li>
                    <li>
                      --We leave the large items on the bottom of the Product
                      Backlog as they are for now.
                    </li>
                  </ul>
                </th>
              </tr>
            </table>
          </p>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Burndown- Burn up Chart</h1>
            </div>
            <div className="content-description">
              <img src="./images/bd.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Continous Integration</h1>
            </div>
            <div className="content-description">
              <img src="./images/cim.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>User Stories</h1>
            </div>
            <div className="content-description">
              <img src="./images/us.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div align="center">
          <h3 id="SoftwareVersionControl" className="App-intro">
            Software Version Control
          </h3>
          <p>
            Version control systems are a category of software tools that help a
            software team manage changes to source code over time.
            <br />
            If a mistake is made, developers can turn back the clock and compare
            earlier versions of the code to help fix the mistake while
            minimizing <br />
            disruption to all team members. Version control protects source code
            from both catastrophe and the casual degradation of human error and
            unintended consequences.
            <br />
            <table>
              <tr>
                <th>
                  <img
                    src="./images/git.png"
                    alt="GIT"
                    width="400"
                    height="600"
                  />
                </th>
                <th align="left">
                  <img
                    src="./images/SVC.png"
                    alt="GIT"
                    width="600"
                    height="300"
                  />
                </th>
              </tr>
            </table>
          </p>
        </div>
        <h3 id="branch-strategy">Branch Strategy in Agile</h3>
        <img src="./images/branchStrategy.png" height="400px" />
        <h4>Why branch?</h4>
        <p>The team can easily collaborate in a central code base!</p>
        <p>
          It prevents the product from instability from features under
          construction.
        </p>
        <h3>What is a branch?</h3>
        <p>It is a copy of a code base at that point of time</p>
        <div>
          <div align="center">
            <h3 id="branchvsmerge" className="App-intro">
              Branching vs. Merging
            </h3>
            <p>
              Git branches are effectively a pointer to a snapshot of your
              changes. When you want to add a new feature or fix <br />
              a bug—no matter how big or how small—you spawn a new branch to
              encapsulate your changes. This makes it harder for <br />
              unstable code to get merged into the main code base, and it gives
              you the chance to clean up your future's history
              <br />
              before merging it into the main branch.
              <br />
              <table>
                <tr>
                  <th>
                    <img
                      src="./images/b.jpg"
                      alt="GIT"
                      width="600"
                      height="300"
                    />
                  </th>
                  <th align="left">
                    <img
                      src="./images/m.jpg"
                      alt="GIT"
                      width="600"
                      height="300"
                    />
                  </th>
                </tr>
              </table>
            </p>
            <p>
              The git merge command lets you take the independent lines of
              development created by git branch and integrate them into a single
              branch. <br />
              Git merge will combine multiple sequences of commits into one
              unified history. In the most frequent use cases, git merge is used
              to combine two branches.
            </p>

            <p>
              <table>
                <tr>
                  <th>
                    <p>
                      <h4> To create a branch called new_feature: </h4>
                    </p>
                    $ git branch new_feature
                    <br />
                    Then “check it out”:
                    <br />
                    $ git checkout new_feature
                    <br />
                    Make various modifications, and then add and commit.
                    <br /> <br />
                    To go back to the master branch, check it out:
                    <br />
                    $ git checkout master
                    <br />
                    To push the branch to github, use this:
                    <br />$ git push origin new_feature
                  </th>
                  <th align="left">
                    <h4> To merge a branch called new_feature: </h4>
                    <br />
                    <br />
                    Switched to branch 'master'
                    <br />
                    $ git checkout master
                    <br /> To merge: $ git merge new_feature
                  </th>
                </tr>
              </table>
            </p>
          </div>
          <h2 id="EmergentArchitecture">Emergent Architecture</h2>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Development Team</h1>
            </div>
            <div className="content-description">
              <img src="./images/dt.png" alt="logo" />
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Emerging Architecture</h1>
            </div>
            <div className="content-description">
              <img src="./images/Architecture_Emergent.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Fit for Purpose</h1>
            </div>
            <div className="content-description">
              <img src="./images/ffp.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <h1>Architecture has no Value</h1>
            </div>
            <div className="content-description">
              <img src="./images/ahnv.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <h3 id="BDUF">
          BDUF (<i>B</i>ig <i>D</i>esign <i>U</i>p <i>F</i>ront)
        </h3>
        <p>
          Big Design Up Front (BDUF) is a <i>software development approach</i>{" "}
          in which the program's design is to be completed and perfected before
          that program's implementation is started.
          <i>
            {" "}
            BDUF is used to indicate that the whole design solution is done
            before execution.
          </i>{" "}
          (In short, BDUF is the art of doing things which shouldn’t be done).
          It is often associated with the waterfall model of software
          development, where there is an explicit phase of analysis prior to the
          implementation phase. Nowadays, with the expansion of agile methods,
          there is no longer a long analysis phase. However, we do still find
          many BDUF attitudes in companies.
        </p>
        <h4>In product development:</h4>
        <p>
          6 months of Design Thinking | User story mapping with dozens of
          stories | Design of all system screens before implementation
        </p>
        <h4>In software development:</h4>
        <p>
          The creation of an entire API of services before considering their
          application | Thinking through the best possible architecture, in some
          absurd cases even forgetting to keep an eye on the product’s objective
          | Creating parameters for all variables, before a demand even exists
        </p>
        <h4>In life:</h4>
        <p>
          people who plan every last detail of a vacation, and who become
          frustrated by the unexpected | people who decide that in order to find
          love they should join a gym for a year, then spend another year
          learning to dance and only then start going out to clubs
        </p>
        <h4>Hot or not?</h4>
        <p>
          <b>
            + Thinking things out in advance often saves serious development
            headaches later on, e.g. on making a particular specification
            change. "Making this change in the spec took an hour or two. If we
            had made this change in code, it would have added weeks to the
            schedule." - Joel Spolsky, a popular online commentator on software
            development
          </b>
        </p>
        <p>
          <b>
            - Software requirement changes often and frequently. The big effort
            spent on the full design might be obsolete when the development
            reach halfway.
          </b>
        </p>
        <img src="./images/bduf.png" />
        <div>
          <h2 id="QualityCode">QUALITY CODE</h2>

          <div>
            <div className="content-wrapper">
              <div className="content-header">
                <h1>Build Automation</h1>
              </div>
              <div className="content-description">
                <img src="./images/ba.jpg" alt="logo" />
              </div>
            </div>

            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <h1>Technical Debt</h1>
                </div>
                <div className="content-description">
                  <img src="./images/Technical Debt.jpg" alt="logo" />
                </div>
              </div>
            </div>
            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <h1>Types of Test</h1>
                </div>
                <div className="content-description">
                  <img src="./images/ToT.jpg" alt="logo" />
                </div>
              </div>
            </div>
            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <h1>TDD</h1>
                </div>
                <div className="content-description">
                  <img src="./images/TDD.jpg" alt="logo" />
                </div>
              </div>
            </div>
            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <h1>Code Coverage</h1>
                </div>
                <div className="content-description">
                  <img src="./images/Code Coverage.jpg" alt="logo" />
                </div>
              </div>
            </div>

            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <h1>Pair Programming</h1>
                </div>
                <div className="content-description">
                  <img src="./images/Pair_programming.jpg" alt="logo" />
                </div>
              </div>
            </div>

            <h3 id="CommitStandards" className="App-intro">
              Commit Standards
            </h3>
            <p>
              All users of GIT should follow the same guideline for commiting.
              This makes it easier to understand why there is a commit for all
              participants. <br />
              The <b>Syntax</b> should look like this:
            </p>
            <table align="center">
              <tr>
                <th>
                  <img
                    src="./images/syntax.PNG"
                    alt="Syntax"
                    width="317"
                    height="120"
                  />
                </th>
                <th>
                  <img
                    src="./images/types.jpg"
                    alt="Types"
                    width="800"
                    height="300"
                  />
                </th>
              </tr>
            </table>

            <h3 id="codvsdev" className="App-intro">
              Coding vs. Developing
            </h3>
            <img src="./images/coding_developing.png" width="90%" />
            <p>
              <b>Conclusion:</b> A coder could be a developer or a programmer,
              while programmers focus more on coding towards a specific
              applications and developers could do everything all together.
            </p>
          </div>
        </div>
        <div>
          <h3
            id="Quality Code in relation to Quality Software"
            align="center"
            className="App-intro"
          >
            Quality Code in relation to Quality Software
          </h3>
          <p>
            Code quality can translate into how useful and maintainable your
            code is: high-quality code can be re-used and re-developed;
            low-quality code doesn’t last. <br />
            Well-structured code, following language rules, is much easier to
            read and understand by different browsers and other <br />
            developers. It is also more reliable and avoids future rework.
            <br />
          </p>
          <p>
            <table>
              <tr>
                <th>
                  <li>
                    what is code quality?
                    <br />
                  </li>
                </th>
                <th align="left">
                  <ul>
                    <li>--• Readability, consistency</li>
                    <br />
                    <li>--• Predictability, reliability, and robustness</li>
                    <br />
                    <li>
                      --• Maintainability and extensibility
                      <br />
                    </li>
                  </ul>
                </th>
              </tr>
            </table>
          </p>

          <p>
            <table>
              <tr>
                <th>
                  <li>Why does code quality really matter?</li>
                </th>
                <th align="left">
                  <ul>
                    <li>
                      --• Easier to review, leading to a much lower development
                      effort
                    </li>
                    <br />
                    <li>--• Easier to understand, maintain and extend</li>
                    <br />
                    <li>--• Less prone to new bugs being introduced</li>
                  </ul>
                </th>
              </tr>
            </table>
          </p>

          <div>
            <div className="content-wrapper">
              <div className="content-header">
                <h1>Static Code Analysis</h1>
              </div>
              <div className="content-description">
                <img src="./images/sca.jpg" alt="logo" />
              </div>
            </div>
          </div>

          <div>
            <div className="content-wrapper">
              <div className="content-header">
                <h1>Unit Testing</h1>
              </div>
              <div className="content-description">
                <img src="./images/ut.jpg" alt="logo" />
              </div>
            </div>
          </div>

          <div>
            <div className="content-wrapper">
              <div className="content-header">
                <h1>Reporting a bug</h1>
              </div>
              <div className="content-description">
                <img src="./images/Reporting_a_Bug.jpg" alt="logo" />
              </div>
            </div>

            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <h1>Unit Test F.I.R.S.T</h1>
                </div>
                <div className="content-description">
                  <img src="./images/Unit_Test_First.jpg" alt="logo" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="content-header">
              <h1>Code Quality</h1>
            </div>
            <div className="content-description">
              <img src="./images/cq1.jpg" alt="logo" />
              <br />
              <img src="./images/cq2.jpg" alt="logo" />
            </div>
          </div>

          <div>
            <h3 id="Bug" className="App-intro">
              Bug Definition / Bug tackling in Jira
            </h3>
            <img
              src="./images/bugDesc.png"
              alt="bugs"
              width="800"
              height="500"
            />
          </div>

          <div className="content-wrapper">
            <div className="content-header">
              <h1>Clean Code</h1>
            </div>
            <div className="content-description">
              <img src="./images/cc.jpg" alt="logo" />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <p />
        -Since you test early and often, you quickly detect and resolve issues,
        bugs, and defects before they become critical
        <br />
        -In each sprint you can put a new tag for a bug
        <br />-<b>“iteration planning”</b> or <b>“sprint planning.”</b> you can
        decide that each sprint, you’re going to devote some of your time to
        fixing bugs
        <br />
        <br />
        <img
          src="./images/bugInScrum.jpg"
          alt="bugs"
          width="700"
          height="400"
        />
        <div>
          <h3 id="atdd">Acceptance Test-Driven Development</h3>
          <img src="./images/atdd.png" width="80%" />
        </div>

        <div>
        <h1 id="devAndTest" className="App-intro">
              Developing Test &#38; Practises
            </h1>
            <p>
            </p>
            <img
          src="./images/UnitTest.jpg"
          alt="bugs"
          width="800"
          height="500"
        />
        <p></p>
        <img
          src="./images/sadhappy.jpg"
          alt="bugs"
          width="800"
          height="600"
        />


        </div>
      </div>
    );
  }
}

export default App;
