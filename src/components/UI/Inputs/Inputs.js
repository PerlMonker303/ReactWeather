import React, { Component } from 'react';

import Input from './Input/Input';
import Button from '../Button/Button';
import styles from './Inputs.module.css';

import data from '../../../api/citiesDB.json';

const MAX_ENTRIES = 5;

class Inputs extends Component {
    state = {
        selected_country: '',
        selected_region: '',
        selected_city: '',
        sugg_countries: [],
        sugg_regions: [],
        sugg_cities: [],
        current_country: '',
        current_region: '',
        current_city: ''
    }

    setCountryBasedOnRegion = (ctr_name, reg_name) => {
        /*Sets the current and selected country based on a given region
        Pre: ctr_name - country name; reg_name - region name
        Post: current and selected country are updated
        */
        this.setState(prevState => ({
            ...prevState.state,
            selected_country: ctr_name,
            current_country: ctr_name
        }));
    }

    setRegionBasedOnCity = (reg_name, city_name) => {
        /*Sets the current and selected region based on a given city
        Pre: reg_name - region name ; city_name - city name
        Post: current and selected region are updated
        */
        this.setState(prevState => ({
            ...prevState.state,
            selected_region: reg_name,
            current_region: reg_name
        }));
    }

    changedInputHandler = (event, type) => {
        /*Handles changes made on inputs
        Pre: event - the changed event; type - what type of input (Country, State/Region/County or City)
        Post: current state is modified
        */
        let entries = 0; //store entries so far
        const text = event.target.value; //get the user input, transform it to uppercase
        switch(type){
            case ("Country"):
                this.setState(prevState => ({
                    ...prevState.state,
                    selected_country: '',
                    current_country: text,
                    sugg_countries: [],
                    selected_region: '',
                    current_region: '',
                    selected_city: '',
                    current_city: ''
                }));
                 data.map(country => {
                    if(country.name.toUpperCase() === text.toUpperCase() && text && entries < MAX_ENTRIES){
                        this.setState(prevState => ({
                            ...prevState.state,
                            selected_country: country.name,
                            sugg_countries: []
                        }));
                    }
                    else if(country.name.slice(0,text.length).toUpperCase() === text.toUpperCase() && text && entries < MAX_ENTRIES){
                        this.setState(prevState => ({
                           ...prevState.state, 
                           sugg_countries: [...prevState.sugg_countries, country.name]
                        }));
                        entries++;
                        return country;
                    }
                });
                break;
            case ("State/Region/County"):
                this.setState(prevState => ({
                    ...prevState.state,
                    selected_region: '',
                    current_region: text,
                    sugg_regions: [],
                    selected_city: '',
                    current_city: ''
                }));
                data.map(country => {
                    if(country.name === this.state.selected_country || this.state.selected_country === ''){
                        country.states.map(region => {
                            if(region.name.toUpperCase() === text.toUpperCase() && text && entries < MAX_ENTRIES){
                                this.setState(prevState => ({
                                    ...prevState.state,
                                    selected_region: region.name,
                                    sugg_regions: []
                                }));

                                if(this.state.selected_country === ''){ //auto set the country
                                    this.setCountryBasedOnRegion(country.name, region.name);
                                }
                            }
                            else if(region.name.slice(0,text.length).toUpperCase() === text.toUpperCase().toUpperCase() && text && entries < MAX_ENTRIES){
                                this.setState(prevState => ({
                                    ...prevState.state, 
                                    sugg_regions: [...prevState.sugg_regions, region.name]
                                }));
                                entries++;
                                return region;
                            }
                        });
                        if(country.name === this.state.country){
                            return;
                        }
                    }
                })
                break;
            case ("City"):
                this.setState(prevState => ({
                    ...prevState.state,
                    selected_city: '',
                    current_city: text,
                    sugg_cities: []
                }));

                data.map(country => {
                    if(country.name === this.state.selected_country || this.state.selected_country === ''){
                        country.states.map(region => {
                            if(region.name === this.state.selected_region || this.state.selected_region === ''){
                                region.cities.map(city => {
                                    if(city.name.toUpperCase() === text.toUpperCase() && text && entries < MAX_ENTRIES) {
                                        this.setState(prevState => ({
                                            ...prevState.state,
                                            selected_city: city.name,
                                            sugg_cities: []
                                        }));

                                        if(this.state.selected_country === ''){ //auto set the country
                                            this.setCountryBasedOnRegion(country.name, region.name);
                                        }

                                        if(this.state.selected_region === ''){ //auto set the region
                                            this.setRegionBasedOnCity(region.name, city.name);
                                        }
                                    }
                                    else if(city.name.slice(0,text.length).toUpperCase() === text.toUpperCase() && text && entries < MAX_ENTRIES){
                                        this.setState(prevState => ({
                                            ...prevState.state, 
                                            sugg_cities: [...prevState.sugg_cities, city.name]
                                        }));
                                        entries++;
                                        return city;
                                    }
                                });
                            }
                        });
                    }
                });
                break;
            default:
                break;
        }
    }

    buttonClickedHandle = (event) => {
        const region = this.state.selected_region.split(" ")[0];
        const query = this.state.selected_city + "," + region + "," + this.state.selected_country;
        console.log(query);
        this.props.update(query);
    }

    render(){
        return (
            <div className={styles.Input}>
                <h1>Location:</h1>
                <Input placeholder="Country" changed={this.changedInputHandler} value={this.state.current_country} suggestions={this.state.sugg_countries}/>
                <Input placeholder="State/Region/County" changed={this.changedInputHandler} value={this.state.current_region} suggestions={this.state.sugg_regions} />
                <Input placeholder="City" changed={this.changedInputHandler} value={this.state.current_city} suggestions={this.state.sugg_cities} />
                <Button text="GO" clicked={this.buttonClickedHandle} />
            </div>
        )
    }
}

export default Inputs;