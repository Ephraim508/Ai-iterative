// import Header from './components/Header'
import Home from './components/Home'

import Navbar from './components/Navbar'
import SelectPuja from './components/SelectPuja'
import Puja from './components/Puja'

import PackagePuja from './components/PackagePuja'
import BookingDetails from './components/BookingDetails'
import {Route, Switch, Redirect} from 'react-router-dom'



import './App.css'

import {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="appmain-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/puja" component={Puja} />
          <Route exact path="/selectpuja" component={SelectPuja} />
          <Route exact path="/selectpuja/:id" component={SelectPuja} />
          <Route exact path="/packagepuja/:id" component={PackagePuja} />
          <Route exact path="/bookingdetails/:id" component={BookingDetails}/>
        </Switch>
      </div>
    )
  }
}
export default App
