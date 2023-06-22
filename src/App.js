import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/";
import Modal from "./components/Modals";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import SuperiorReactTable from "./pages/SuperiorReactTable";

function App() {
  const modal = useSelector((state) => state.modal);
  return (
    <div className="App">
      <Toaster position="top-right" />
      {modal.open && <Modal name={modal.open} data={modal.data} />}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route
            path="/portfolio/superior-react-table"
            exact
            component={SuperiorReactTable}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
