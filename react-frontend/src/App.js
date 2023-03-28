import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                 <Route path="/" component={ListEmployeeComponent}></Route>
                 <Route path="/employees" component={ListEmployeeComponent}></Route>
                 <ListEmployeeComponent />
              </Switch>
            </div>
          <FooterComponent />
      </Router>  
    </div>
  );
}

export default App;
