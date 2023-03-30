import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                 <Route path="/" exact component={ListEmployeeComponent}></Route>
                 <Route path="/employees" component={ListEmployeeComponent}></Route>
                 <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                 <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>  
    </div>
  );
}

export default App;
