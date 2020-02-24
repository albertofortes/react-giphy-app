import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';

import './App.scss';

function App() {
  const [headerMsg, setHeaderMsg] = useState('Gifs that are trendy!');

  const getQueryMsg = (msg) => {
    // lifted Up states as props!
    setHeaderMsg("Gifs about: '" + msg + "'");
  };

  return (
    <Router>
      <div className="App">
        <Header hMsg={headerMsg} />
        <div className="content">
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} queryMsg={getQueryMsg} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
