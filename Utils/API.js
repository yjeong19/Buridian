import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';


const clientID = 'client_id=XBRO1GKOZDIWDCFK2DK3BHVWONDL4BG5ZVABQKHF0WBSV3SG';
const clientSecret = 'client_secret=M20PQSTDV5DWFNTM4SRJF3ONOIAS2D2K5THS5NIDPEZKK3CJ';
const ll = "38.8817,-77.1163";
const limit = "limit=5";
const categoryId = "categoryId=4d4b7105d754a06374d81259";

let queryURL = `https://api.foursquare.com/v2/venues/search?ll=${ll}&${clientID}&${clientSecret}&v=20180118&${limit}&${categoryId}`;


 const API = (

  fetch(queryURL)
  .then(function(response) {
    // console.log(response);
    return response.json()
  })

);
export default API;
