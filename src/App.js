import './App.css';
import React,{Component} from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
class App extends Component{

  render(){
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }

};

export default App;
