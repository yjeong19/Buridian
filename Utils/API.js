import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';


const clientID = 'client_id=F1HXPLN4RQVN33S1FGTGRHHUT4KEZAZVCEOM5YYS10YSA5DD';
const clientSecret = 'client_secret=SV5APWFL0S5MWVEK0ZQ214PZTFYU1YXKLDQLV11QJQN1Y3FE';
let near = "Ballston";
const limit = 'limit=30';
const name = "name=restaurant";
const radius = "radius=4828"; //default is 5 miles
// const restaurantId = ''

// 4bf58dd8d48988d1c4941735 restaurant




const API = {
  
  getPhoto: (restaurantId)=>{
    let photoURL = `https://api.foursquare.com/v2/venues/${restaurantId}/photos?&${clientID}&${clientSecret}&v=20180118`
    return fetch(photoURL);
  },
  
  getRestaurant: (Ids)=>{
    //Restaurant in ID
    const categoryId = "categoryId=4bf58dd8d48988d148941735";
    let categories;
    if (Ids){
      categories = categoryId + ',' + Ids
    }
    else{
      categories = categoryId;
    }
    let queryURL = `https://api.foursquare.com/v2/venues/search?near=${near}&${clientID}&${clientSecret}&v=20180118&${categories}&${name}&${radius}&${limit}`;
    return fetch(queryURL);
  }

}


export default API