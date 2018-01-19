import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';


const clientID = 'client_id=F1HXPLN4RQVN33S1FGTGRHHUT4KEZAZVCEOM5YYS10YSA5DD';
const clientSecret = 'client_secret=SV5APWFL0S5MWVEK0ZQ214PZTFYU1YXKLDQLV11QJQN1Y3FE';
let ll = "38.7589,-77.2709";
const limit = "limit=1";
let categoryId = "categoryId=4bf58dd8d48988d1c4941735";
const name = "name=restaurant";
const radius = "radius=8046"; //default is 5 miles
// const restaurantId = ''

let queryURL = `https://api.foursquare.com/v2/venues/search?ll=${ll}&${clientID}&${clientSecret}&v=20180118&${limit}&${categoryId}&${name}&${radius}`;



const API = (restaurantId)=>{

  let photoURL = `https://api.foursquare.com/v2/venues/${restaurantId}/photos?&${clientID}&${clientSecret}&v=20180118`
  
  return fetch(photoURL)

}


export default API