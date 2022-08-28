import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import AddressDisplay from './AdressDisplay';
import WsConnector from './WsConnector';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header headerText="Sextant" />
                <Content name="Public IPv4 Address">
                    <AddressDisplay url='https://api.ipify.org?format=json' />
                </Content>
                <Content name="Public IPv6 Address">
                    <AddressDisplay url='https://api64.ipify.org?format=json' />
                </Content>
                <Content name="WebSocket Packet Latency">
                    <WsConnector />
                </Content>
            </div>
        );
    }
}

export default App;
