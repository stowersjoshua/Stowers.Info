import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Header from './app/shared/components/Header';
import Home from './app/screens/Home';
import Contact from './app/screens/Contact';
import Github from './app/screens/Github';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip';
import './assets/styles/styles.scss';

ReactDOM.render((
  <div className="container">
    <Header />
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="github" component={Github} />
    </Router>
  </div>
), document.getElementById('container'));
