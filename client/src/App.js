import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  M  from 'materialize-css'
import { Main } from './style'
import Nav from './components/Nav';
import About from './pages/About';
import Connect from './pages/Connect';
import Projects from './pages/Projects';


function App() {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <Router>
      <Main className="App">
        <Nav />
        <div className='container'>
          <Switch>
            <Route exact path={['/', '/about']}>
              <About />
            </Route>
            <Route exact path='/connect'>
              <Connect />
            </Route>
            <Route exact path='/projects'>
              <Projects />
            </Route>
          </Switch>
        </div>
      </Main>
      
    </Router>

  );
}

export default App;
