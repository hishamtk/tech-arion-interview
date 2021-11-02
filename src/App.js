import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from './Components/Counter'
import Form from './Components/Form';
import Home from './Components/Home'
import Todo from './Components/Todo';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter </Link></li>
          <li><Link to="/todo">Todo </Link></li>
          <li><Link to="/form">Form</Link></li>

        </ul>
      </nav>


      <Switch>
        <Route path="/counter">
          <Counter />
          
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <Home />

        </Route>
      </Switch>
    </Router>
  )
}

export default App

