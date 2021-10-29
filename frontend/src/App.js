import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import SuccessCheckout from './components/SuccessCheckout'
import ErrorCheckout from './components/ErrorCheckout'

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li><Link to='/'>Home!</Link></li>
          <li><Link to='/success'>Success</Link></li>
          <li><Link to='/error'>Error</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/success' component={SuccessCheckout} />
        <Route exact path='/error' component={ErrorCheckout} />
      </Switch>
    </Router>
  );
}

export default App;
