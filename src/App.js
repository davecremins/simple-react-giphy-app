import React, { Component } from 'react';
import config from './config.js';
import logo from './logo.svg';
import './App.css';
import './giphy_components/giphy.css';
import {Search, ImageResult} from './giphy_components/search.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      url_text: '',
      image_url: ''
    };
    this.onKeyPressForSearch = this.onKeyPressForSearch.bind(this);
  }

  getRandomImage(query){
    let validateResponse = (res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Fetch from url failed.');
      }
    };

    let updateState = (data, url) => {
      this.setState({ 
        url_text: url,
        image_url: data.fixed_height_downsampled_url,
      });
    };

    const url = `${config.url}?api_key=${config.api_key}&tag=${query}`;
    fetch(url).then(validateResponse)
      .then(response => updateState(response.data, url))
      .catch(error => console.log(error));
  }

  onKeyPressForSearch(e){
    if(e.key === 'Enter'){
      if(e.target.value !== ''){
        this.getRandomImage(e.target.value);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Search Giphy:
          <Search onKeyPress={this.onKeyPressForSearch} />
        </p>
        <p>
          <ImageResult className="Giphy-Image" alt='No image here :(' src={this.state.image_url} />
          <label className="Giphy-Label">{this.state.url_text}</label>
        </p>
      </div>
    );
  }
}

export default App;
