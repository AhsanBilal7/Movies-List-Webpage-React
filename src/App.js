import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Route, Switch, Link } from "react-router-dom";
import Popular from './Popular/Popular';
import Home from './Home/Home';
import Trending from './Trending/Trending';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/popular" component={Popular} />
          <Route exact path="/trending" component={Trending} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
