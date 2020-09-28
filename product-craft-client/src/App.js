import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const App = () =>
<Router>
  <Fragment>
    <Navbar />
  </Fragment>
</Router>

export default App;
