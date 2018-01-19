import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';


const clientID = 'client_id=F1HXPLN4RQVN33S1FGTGRHHUT4KEZAZVCEOM5YYS10YSA5DD';
const clientSecret = 'client_secret=SV5APWFL0S5MWVEK0ZQ214PZTFYU1YXKLDQLV11QJQN1Y3FE';
let near = "Ballston";
// const limit = 20;
let categoryId = "categoryId=4bf58dd8d48988d1c4941735";
const name = "name=restaurant";
const radius = "radius=4828"; //default is 5 miles

let queryURL = `https://api.foursquare.com/v2/venues/search?near=${near}&${clientID}&${clientSecret}&v=20180118&${categoryId}&${name}&${radius}`;

const RandomRestaurant = fetch(queryURL)
    // console.log(data.response.venues[i].name, '74');
    // console.log(data.response.venues[i].id,'75')
    // console.log(this.state, '76')


export default RandomRestaurant;
