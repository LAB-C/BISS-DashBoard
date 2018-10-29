import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Logo from "./img/Logo.png";
import './css/App.css';
import NodePage from "./Pages/NodePage";
import DevicePage from "./Pages/DevicePage";
import Picture from './img/Profile.jpg';
import './css/Profile.css';
import Graph from "./Dashboard/Graph/Graph";
import SensorList from "./Dashboard/Sensor/SensorList";
import DeviceList from "./Dashboard/Device/DeviceList";
import NodeList from "./Dashboard/Node/NodeList";
import TransectionList from "./Dashboard/Transection/TransectionList";

const nodeData = [
    ["1", "Arduino Uno R3", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "iPad Pro"],
    ["2", "Arudino Nano", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "SAMSUNG GALAXY S8"],
    ["3", "Arduino Mega", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "iPhone 6s"],
    ["4", "raspberry pi 3", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "iPhone 6s"]
]

const nPage = nodeData.map(np => (<Link to path={/NodePage/ + np[0]}><NodePage txhash={np[2]} txfrom={np[1]} txto={np[3]}/></Link>))

const deviceData = [
    ["1", "iPad Pro", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "Arduino Uno R3"],
    ["2", "SAMSUNG GALAXY S8", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "Arudino Nano"],
    ["3", "iPhone 6s", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c","raspberry pi 3"]
]

const dPage = deviceData.map(dp => (<Link to path={/DevicePage/ + dp[0]}><DevicePage txhash={dp[2]} txfrom={dp[1]} txto={dp[3]}/></Link>))



console.log(dPage);
class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
            <a href="/"><img className="Logo" src={Logo} alt="Logo" /></a>
          <nav>
              <div className="Profile">
                  <img src={Picture} alt={"gtg7784"} />
                  <p>
                      <span>고태건</span>(gtg7784)
                      <i className="fas fa-caret-down fa-2x" /><br/>
                      용인신릉중학교
                  </p>
              </div>
          </nav>
        </header>
          <BrowserRouter>
              <div className="content">
                  <h1><span>대시보드</span> DashBoard</h1>
                  <Graph />
                  <SensorList /> <br/>
                  <DeviceList />
                  <NodeList />
                  <TransectionList />
              </div>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
