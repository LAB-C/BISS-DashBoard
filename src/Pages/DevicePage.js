import React, { Component } from 'react';
import '../css/Pages.css';
import '../css/App.css'

class DevicePage extends Component{
    render() {
        return (
            <div className="asdf">
                <h1><span>Arduino Uno R3</span>의 트렌젝션</h1>
                <div className="DeviceContent">
                    <table>
                        <thead>
                        <tr>
                            <td className="txhash">TX Hash</td>
                            <td className="txto">To</td>
                            <td className="txfrom">From</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">Arduino UNO R3</td>
                            <td className="txfrom">iPad Pro</td>
                        </tr>

                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">Arduino UNO R3</td>
                            <td className="txfrom">iPhone 6s</td>
                        </tr>

                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">Arduino UNO R3</td>
                            <td className="txfrom">iPhone 6s</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DevicePage;