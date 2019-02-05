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
				<img src='./images/kk.jpg' alt="logo" />
				</div>
			</div>
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Development Team</h1>
				</div>
				<div className="content-description">
				<img src='./images/dt.png' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Sprints</h1>
				</div>
				<div className="content-description">
				<img src='./images/sprints.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Sprint Retrospective</h1>
				</div>
				<div className="content-description">
				<img src='./images/david.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Sprint Review</h1>
				</div>
				<div className="content-description">
				<img src='./images/sr.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Scrum Values</h1>
				</div>
				<div className="content-description">
				<img src='./images/sv.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Increment</h1>
				</div>
				<div className="content-description">
				<img src='./images/ir.jpg' alt="logo" />
					
				</div>
			</div>


      <div className="content-wrapper">
				<div className="content-header">
					<h1>User Stories</h1>

				</div>
				<div className="content-description">
				<img src='./images/us.jpg' alt="logo" />
					
				</div>
			</div>

			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Continous Integration</h1>
				</div>
				<div className="content-description">
				<img src='./images/cim.jpg' alt="logo" />
					
				</div>
			</div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Burndown- Burn up Chart</h1>
				</div>
				<div className="content-description">
				<img src='./images/bd.jpg' alt="logo" />
					
				</div>
	
		    </div>
			
			<div className="content-wrapper">
				<div className="content-header">
					<h1>Build Automation</h1>
				</div>
				<div className="content-description">
				<img src='./images/ba.jpg' alt="logo" />
					
				</div>
	
		    </div>

			<div className="content-wrapper">
				<div className="content-header">
					<h1>Architecture has no Value</h1>
				</div>
				<div className="content-description">
				<img src='./images/ahnv.jpg' alt="logo" />
					
				</div>
             </div>
			 
            <div className="content-wrapper">
				<div className="content-header">
					<h1>Fit for Purpose</h1>
				</div>
				<div className="content-description">
				<img src='./images/ffp.jpg' alt="logo" />
					
				</div>
	
		  </div>
		  <div className="content-wrapper">
				<div className="content-header">
					<h1>Emerging Architecture</h1>
				</div>
				<div className="content-description">
				<img src='./images/Architecture_Emergent.jpg' alt="logo" />
					
				</div>
	
		  </div>

      </div>
      
	  </div>
    );
  }
}

export default App;
