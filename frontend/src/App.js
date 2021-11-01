import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import SuccessCheckout from './components/SuccessCheckout/SuccessCheckout'
import ErrorCheckout from './components/ErrorCheckout/ErrorCheckout'
import MonetizedApi from './components/MonetizedApi/MonetizedApi'

const App = () => {
  return <div style={{height: '100%', width: '100%'}}>
    <Router basename='/monetized-api'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/success' component={SuccessCheckout} />
        <Route exact path='/error' component={ErrorCheckout} />
        <Route exact path='/use-api' component={MonetizedApi} />
      </Switch>
    </Router>
  </div>
}

export default App
