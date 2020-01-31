import React,{Component} from 'react';
import './scss/main.scss';
import BrowserRoutes from './Routes/BrowserRoutes';

//CONTAINER component -> have state / have class contains other UI component
class App extends Component {  
  render(){
    return (  //JSX
      <BrowserRoutes/>
    )
  }
}

export default App;