/* eslint-disable comma-dangle */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Property from '../../containers/Property';
import Properties from '../../containers/Properties';
import App from '../App';
import Favorites from '../../containers/Favorites';
import Signup from '../../containers/Signup';
import Dashboard from '../../containers/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/properties" component={Properties} exact />
      <Route path="/properties/:id" component={Property} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
