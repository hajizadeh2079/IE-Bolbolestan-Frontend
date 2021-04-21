import {React, Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import './common/all.css';
import './common/reset.css';
import Login from './login/Login'

class App extends Component {
  state = { id: null }
  render() { 
    if (!this.state.id)
      return <Login setId={this.setId}/>
    else
      return <h1>home</h1>
  }

  setId = (id) => {
    this.setState({id: id})
  }
}
 
export default App;