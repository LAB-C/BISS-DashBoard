import React, { Component } from 'react';
import Phone from './img/icons8-android.png';
import NodePict from './img/icons8-blockchain_technology.png';
import Arduinoicon from './img/icons8-arduino.png';
import './css/Dashboard.css'

var type;
var data;

class Listitem extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        if(this.props.type) type = this.props.type;
    }

    handleChange(e) {
        this.props.onClick(this.props.dd[0]);
        console.log(this.props.dd[0]);
    }
    handleChange2(e) {
        this.props.onClick(this.props.nd[0]);
        console.log(this.props.nd[0]);
    }
    handleChange3(e) {
        this.props.onClick(this.props.hd);
        console.log(this.props.hd);
    }

    render() {
        switch(type) {
            case "Device": data=(
                <div onClick={this.handleChange} value={this.props.dd[1]} className="Device">
                    <a>
                        <img src={Phone} alt="Phone" />
                        <p>
                            <span>{this.props.dd[1]}</span>
                            <br/>
                            {this.props.dd[2].substr(1, 30)}...
                        </p>
                    </a>
                </div>);
            break;

            case "Sensor": data=(
                <div  className="Sensor"><img src={Arduinoicon} alt="Arduino" />
                    <p>
                        <span>{this.props.sd}</span> <br />
                        SENSOR</p>
                </div>);
            break;

            case "Node": data=(
                <div onClick={this.handleChange2} className="Node">
                    <img src={NodePict} alt="Node" />
                    <p>
                        <a>
                            <span>{this.props.nd[1]}</span> <br />
                            {this.props.nd[2].substr(1, 30)}...
                        </a>
                    </p>
                </div>);
            break;

            case "Tran" : data=(
                <div onClick={this.handleChange3} className="Node">
                    <p>
                        <a>
                            <span>{this.props.hd}</span>
                        </a>
                    </p>
                </div>);
            break;

            default:
                data= (<div></div>);

        }

        return (
            data
        );
    }
}

export default Listitem;
