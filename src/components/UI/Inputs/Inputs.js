import React from 'react';

import Input from './Input/Input';
import Button from '../Button/Button';
import styles from './Inputs.module.css';

import data from '../../../api/citiesDB.json';

const input = (props) => {
    //KEEP A STATE FOR COUNTRY SO YOU HAVE A SHORTER SEARCH
    //transform input to Input (uppercase) and add useState hook
    //PROBLEMS WITH SPECIAL CHARACTERS
    const changedInput = (event, type) => {
        const text = event.target.value.toUpperCase();
        if(type === "Country"){
            const matched = data.map(country => {
                if(country.name.toUpperCase() === text){
                    console.log(country);
                    return country;
                }
            });
        }else if(type === "State/Region"){
            const matched = data.map(country => {
                const matched_2 = country.states.map(state => {
                    if(state.name.slice(0,text.length).toUpperCase() === text){
                        console.log(state);
                        return state;
                    }
                });
            });
        }else if(type === "City"){
            const matched = data.map(country => {
                const matched_2 = country.states.map(state => {
                    const matched_3 = state.cities.map(city => {
                        if(city.name.slice(0,text.length).toUpperCase() === text){
                            console.log(city);
                            return city;
                        }
                    });
                });
            });
        }
        console.log("STOP");
    }

    return (
        <div className={styles.Input}>
            <h1>Location:</h1>
            <Input placeholder="Country" changed={changedInput}/>
            <Input placeholder="State/Region" changed={changedInput} />
            <Input placeholder="City" changed={changedInput} />
            <Button text="GO" />
        </div>
    )
}

export default input;

/*
{//<input type="text" placeholder="country" onChange={(event) => changedInput(event, "country")}></input>}
            {//<input type="text" placeholder="state" onChange={changedInput}></input>}
            {//<input type="text" placeholder="city" onChange={changedInput}></input>}
 */