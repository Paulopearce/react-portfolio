import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from "./pages/Portfolio";

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
