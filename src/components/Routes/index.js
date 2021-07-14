/* eslint-disable comma-dangle */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Property from '../../containers/Property';
import App from '../App';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/properties/:id" component={Property} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
