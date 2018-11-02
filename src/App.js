import React, { Component } from 'react';
import Logo from "./img/Logo.png";
import Graph from './Graph'
import ListItem from './Listitem'
import './css/App.css';
import './css/Profile.css';
import './css/Dashboard.css'
import DevicePage from "./Pages/DevicePage";
import NodePage from "./Pages/NodePage";
import TranPage from "./Pages/TranPage";

class App extends Component {

    constructor(props){
        super(props);
        this._switch = this._switch.bind(this);
        this._switch2 = this._switch2.bind(this);
        this._switch3= this._switch3.bind(this);
        this.state = {
            dashboard: true,
            dPage_id: false,
            nPage_id: false,
            tPage_id: false
        }
    }

    _switch(e){
        this.setState({
            dashboard: false,
            dPage_id: true
        });
    }

    _switch2(e){
        this.setState({
            dashboard: false,
            nPage_id: true
        });
    }

    _switch3(e){
        this.setState({
            dashboard: false,
            tPage_id: true
        });
    }
  render() {
      const nodeData = [
          ["1", "Arduino Uno R3", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "iPad Pro"],
          ["2", "Arudino Nano", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "SAMSUNG GALAXY S8"],
          ["3", "Arduino Mega", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "iPhone 6s"],
          ["4", "raspberry pi 3", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "iPhone 6s"]
      ]

      const nData = nodeData.map(nd => (<ListItem type="Node" onClick={this._switch} nd={nd} />))

      const deviceData = [
          ["1", "iPad Pro", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "Arduino Uno R3"],
          ["2", "SAMSUNG GALAXY S8", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c", "Arudino Nano"],
          ["3", "iPhone 6s", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c","raspberry pi 3"]
      ]

      const dData = deviceData.map(dd => (<ListItem type="Device" onclick={this._switch2} dd={dd}/>))


      const hashData = [
          "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c",
          "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c",
          "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c",
          "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c"
      ]

      const hData = hashData.map(hd => (<ListItem type="Tran" onclick={this._switch3} hd={hd}/>))

      const sensorData = [
          "PM2008 Cubic",
          "DHT-11",
          "Temperature Sensor"
      ]

      const sData = sensorData.map(sd => (<ListItem type="Sensor" onclick={this._switch} sd={sd}/>))

      return (
      <div className="App">
        <header className="App-header">
            <a href="/"><img className="Logo" src={Logo} alt="Logo" /></a>
        </header>
          <div className="content">
              {(function () {
                  if (this.state.dashboard) return (
                      <div className="Dashboard">
                          <h1><span>대시보드</span> DashBoard</h1>
                          <Graph/>
                          <div className="SensorList">
                              <h2><span>센서 목록</span>Sensor List</h2>
                              <div className="box">
                                  {sData}
                              </div>
                          </div>
                          <br/>
                          <div className="DeviceList">
                              <h2><span>디바이스 목록</span>Device List</h2>
                              <div className="box">
                                  {dData}
                              </div>
                          </div>
                          <div className="NodeList">
                              <h2><span>노드 목록</span>Node List</h2>
                              <div className="box">
                                  {nData}
                              </div>
                          </div>
                          <div className="TransectionList">
                              <h2><span>트렌젝션 목록</span>Transection List</h2>
                              <div className="box">
                                  {hData}
                              </div>
                          </div>
                      </div>);
                  if (this.state.dPage_id) return (<DevicePage name={deviceData[this.state.dPage_id - 1]}/>);
                  if (this.state.nPage_id) return (<NodePage name={nodeData[this.state.nPage_id - 1]}/>);
                  if (this.state.tPage_id) return (<TranPage name={hashData[this.state.tPage_id]}/>);
              }).bind(this)()
              }
          </div>
      </div>
    );
  }
}

export default App;
