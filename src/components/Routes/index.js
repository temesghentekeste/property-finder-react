/* eslint-disable comma-dangle */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Property from '../../containers/Property';
import Properties from '../../containers/Properties';
import App from '../App';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/properties" component={Properties} exact />
      <Route path="/properties/:id" component={Property} exact />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
