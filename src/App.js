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
				<img src='/kk.jpg' alt="logo" />
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
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Sprints</h1>
				</div>
				<div className="content-description">
				<img src='/sprints.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Sprint Retrospective</h1>
				</div>
				<div className="content-description">
				<img src='/david.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Sprint Review</h1>
				</div>
				<div className="content-description">
				<img src='/sr.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Scrum Values</h1>
				</div>
				<div className="content-description">
				<img src='/sv.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Increment</h1>
				</div>
				<div className="content-description">
				<img src='/ir.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>User story</h1>
				</div>
				<div className="content-description">
				<img src='/us.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Continous Integration</h1>
				</div>
				<div className="content-description">
				<img src='/cim.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Burndown- Burn up Chart</h1>
				</div>
				<div className="content-description">
				<img src='/bd.jpg' alt="logo" />
					
				</div>
			</div>
		</div>
	
		
      </div>
    );
  }
}

export default App;
