import React from 'react';
import './App.css';
import axios from "axios";
import Spinner from './components/Spinner';


class App extends React.Component {
  state = {
    jokes: [],
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/random"
    );
    this.setState({
      jokes: response.data.value,
    });
  }
  myFunc = () => {
    console.log("Button Clicked");
  };
  render () {
    return (
      <div>
        <h1 className="heading">RANDOM CHUCK NORRIS JOKES</h1>
        <h1 className="Joke">{this.state.jokes}</h1>
        <div className="chuck">
        <Spinner  loading={this.state.loading}/>
        </div>
      
        <button className="button"  onClick={this.componentDidMount}>Random Joke</button>
      </div>
    );
  }
};
export default App;