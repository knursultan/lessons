import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Contacts() {
    return <div className="Contacts"/>;
}

function Chat() {
    return <div className="Chat"/>;
}

function SplitePane(props) {
    return (
        <div className="SplitePane">
            <div className="SplitePage-left">
                {props.left}
            </div>
            <div className="SplitePage-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitePane
            left={
                <Contacts/>
            }
            right={
                <Chat/>
            }
        />
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);