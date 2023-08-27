import Container from "./components/Container";

import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route path='/'/>
          </Switch>
        </>
      </Router>
      <Container/>
    </div>
  );
}

export default App;