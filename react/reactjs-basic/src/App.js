import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    formatName(user) {
        if (user) {
            return user.firstName + ' ' + user.secondName;
        }
        return "Other";
    }


    render() {
        const user = {
            firstName: 'Kostya',
            secondName: 'Borw'
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Hello {this.formatName(user) }</h1>
                </header>
            </div>
        );
    }
}

export default App;
