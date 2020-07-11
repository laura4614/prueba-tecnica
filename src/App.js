import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import WeatherDisplay from './component/WeatherDisplay.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     heading:'DarkSkyAPI and mapbox API',
     Search:''
     }
    }

    changeSearch = (e) =>{
    this.setState({search:e.target.value})
  }

  
  render() { 
   
    
    
    const {heading}= this.state;
    return (  

      <div className="App">
        <h1>{heading}</h1>
         
         <WeatherDisplay/>

         
         
        
      </div>

    );
  }
}
 
export default App;
