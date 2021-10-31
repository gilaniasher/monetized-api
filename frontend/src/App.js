import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import SuccessCheckout from './components/SuccessCheckout'
import ErrorCheckout from './components/ErrorCheckout'

const App = () => {
  return (
    <Router basename='/monetized-api'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/success' component={SuccessCheckout} />
        <Route exact path='/error' component={ErrorCheckout} />
      </Switch>
    </Router>
  )
}

export default App
