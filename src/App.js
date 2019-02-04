import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
          {/* */}
        </p>
        <h2>The Product Owner</h2>
        <div align="left">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Product Owner is responsible for maximizing the value of the product resulting from work
        of the Development Team. How this is done may vary widely across organizations, Scrum Teams, and individuals.</p>
        
        
        
        <div align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Product Owner is the sole person responsible for managing the Product Backlog. Product Backlog management includes:
        <div align="center">
        <img src="CN.png" alt="Product Owner responsibilities" width="700" height="450"></img>
        </div>
          </div>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Product Owner may do the above work, or have the Development Team do it. However, the Product Owner remains accountable.
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Product Owner is one person, not a committee. The Product Owner may represent the desires of a committee in the 
            Product Backlog, but those wanting to change a Product Backlog item’s priority must &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address the Product Owner.
          </p>
          </div>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the Product Owner to succeed, the entire organization must respect his or her decisions. The Product Owner’s decisions are
            visible in the content and ordering of the Product Backlog. No one can force the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Team to work from a different set of requirements.</p>
      </div>
    );
  }
}

export default App;
