import { Router, Route, Redirect, hashHistory } from 'react-router';

import Wp from '../wp/wp';
import About from '../about/about';

export default props => (
  <Router history={hashHistory}>
    <Route path="/noticias" component={Wp} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/noticias" />
  </Router>
)