import React, { Component } from 'react';
import Forecasts from './components/Forecasts/Forecasts';
import Inputs from './components/UI/Inputs/Inputs';
import ForecastExpanded from './components/Forecasts/ForecastExpanded/ForecastExpanded';
import Spinner from './components/UI/Spinner/Spinner';

import axios from 'axios';

class App extends Component {
  state = {
    data: null,
    expanded: false,
    loading: false
  }
  getWeatherData = (query) => {
    this.setState({data: null, expanded: false, loading: true});
    const test = axios.get('http://api.weatherstack.com/forecast?access_key=e8ec4f1ea621d83f676f81576bd4e748&query='+query)
    .then(response => {
      this.setState({data: response.data, expanded: true, loading: false});
    });
  }

  render(){
    return (
      <div>
        <Inputs update={this.getWeatherData}/>
        {/*<Forecasts title="TITLE" />*/}
        {this.state.loading ? <Spinner /> : null}
        {this.state.expanded ? <ForecastExpanded data={this.state.data}/> : null}
      </div>
    );
  }
}

export default App;
