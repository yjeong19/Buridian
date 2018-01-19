import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';


const clientID = 'client_id=XBRO1GKOZDIWDCFK2DK3BHVWONDL4BG5ZVABQKHF0WBSV3SG';
const clientSecret = 'client_secret=M20PQSTDV5DWFNTM4SRJF3ONOIAS2D2K5THS5NIDPEZKK3CJ';
let near = "Ballston";
// const limit = 20;
let categoryId = "categoryId=4bf58dd8d48988d1c4941735";
const name = "name=restaurant";
const radius = "radius=4828"; //default is 5 miles

let queryURL = `https://api.foursquare.com/v2/venues/search?near=${near}&${clientID}&${clientSecret}&v=20180118&${categoryId}&${name}&${radius}`;

const RandomRestaurant = fetch(queryURL)

export default RandomRestaurant;
