import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/index.scss";
import App from './App';
import register from './serviceWorker';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/animate/animate.css';
import './assets/vendor/css-hamburgers/hamburgers.min.css';
import './assets/vendor/animsition/css/animsition.min.css';
import './assets/vendor/select2/select2.min.css';
import './assets/vendor/daterangepicker/daterangepicker.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
