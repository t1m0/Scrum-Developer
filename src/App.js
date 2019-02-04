import React, { Component } from 'react';
import logo from './bolt.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Product of Bolt</h1>
        </header>
		<div>
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Scrum Master</h1>
				</div>
				<div className="content-description">
				</div>
			</div>
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Development Team</h1>
				</div>
				<div className="content-description">
				<img src='/dt.png' alt="logo" />
					
				</div>
			</div>
		</div>
	
		
      </div>
    );
  }
}

export default App;
