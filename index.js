import React from 'react'
import ReactDOM from 'react-dom';
import Detail from './components/Detail'
import logo from './assets/image/logo.svg'
//import './index.css'
import './index.scss'

const App = () => <div>
                        <header  className="App-header">
                        <img src={logo} className="App-logo" />
                        </header >
                        Hello React
                        <Detail />
                    </div>

ReactDOM.render(
    <App />,
    document.getElementById('app')
);