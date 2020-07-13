import React, { Component } from 'react';
import Forecasts, { DAYS } from './components/Forecasts/Forecasts';
import Inputs from './components/UI/Inputs/Inputs';
import ForecastExpanded from './components/Forecasts/ForecastExpanded/ForecastExpanded';
import Spinner from './components/UI/Spinner/Spinner';
import Footer from './components/UI/Footer/Footer';
import MapContainer from './components/UI/MapContainer/MapContainer';
import Error from './components/UI/Error/Error';

import axios from 'axios';

const DAYS_INVERTED = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6
};

class App extends Component {
  state = {
    data: null,
    expanded: false,
    loading: false,
    showing_forecast: false,
    query: '',
    activeDay: -1,
    showError: false,
    errorMessage: ''
  }
  getWeatherData = (query) => {
    //query contains the location
    console.log(query);
    if(query === ',,'){
      this.setState({showError: true, errorMessage: 'Invalid location'})
      return;
    }
    const today = DAYS[new Date().getDay()];
    this.setState({data: null, expanded: false, loading: true, showing_forecast: false, query: query, activeDay: today, showError: false});
    axios.get('http://api.weatherstack.com/forecast?access_key=e8ec4f1ea621d83f676f81576bd4e748&query='+query)
    .then(response => {
      this.setState({data: response.data, expanded: true, loading: false, showing_forecast: true});
    })
    .catch(error => {
      this.setState({showError: true, errorMessage: error})
    });
  }

  getWeatherForecast = (clicked_day) => {
    //clicked_day - 0-6 (Sunday-Saturday)
    this.setState({data: null, expanded: false, loading: true, showing_forecast: false, activeDay: clicked_day});
    axios.get('http://api.weatherstack.com/forecast?access_key=e8ec4f1ea621d83f676f81576bd4e748&query='+this.state.query)
    .then(response => {
      this.setState({data: response.data, expanded: true, loading: false, showing_forecast: true});
    })
    .catch(error => {
      this.setState({showError: true, errorMessage: error})
    });
  }

  render(){
    let error = null;
    if(this.state.showError){
      error = <Error message={this.state.errorMessage}/>
    }
    return (
      <div>
        <Inputs update={this.getWeatherData}/>
        {error}
        {this.state.showing_forecast ? <Forecasts clicked={this.getWeatherForecast} activeDay={DAYS_INVERTED[this.state.activeDay]} /> : null}
        {this.state.loading ? <Spinner /> : null}
        {this.state.expanded ? <ForecastExpanded data={this.state.data} activeDay={this.state.activeDay}/> : null}
        {this.state.showing_forecast ? <MapContainer data={this.state.data}/> : null}
        <Footer sticked={!this.state.showing_forecast}/>
      </div>
    );
  }
}

export default App;

/*
<Footer />

<ComposableMap>
  <Geographies geography={GEO_URL}>
    {(geographies) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
    }
  </Geographies>
</ComposableMap> */