import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar/';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
