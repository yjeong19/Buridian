import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

const apikey = 'Bh1GkdpN9hf4X2B784KNXNkwrIIHberMpkM16VUrtqegR4UHhy2M88fHrMwARNF49hd57lz9tDjZV8GKi-iBS9hsJTFU4uSi9S2mivitgNjp6SsxX3zejntqF3RfWnYx'
const foursquare = require('react-native-foursquare-api')({
  clientID: 'XBRO1GKOZDIWDCFK2DK3BHVWONDL4BG5ZVABQKHF0WBSV3SG',
  clientSecret: 'M20PQSTDV5DWFNTM4SRJF3ONOIAS2D2K5THS5NIDPEZKK3CJ',
  style: 'foursquare', // default: 'foursquare' 
  version: '20140806' //  default: '20140806' 
});


var params = {
  "ll": "10.652814,-61.3969835",
  "query": 'Movie Towne'
};

export default {
   
  // see respective api documentation for list of params you could pass 
  getRestaurant: foursquare.venues.getVenues(params)
  .then(venues => {
    console.log(venues);
    return venues;
  })
  .catch(function(err){
    console.log(err);
  })
  
}




//////////////////////yelp attempt below
// import React, {Component} from 'react';
// import { ActivityIndicator, ListView, Text, View } from 'react-native';

// const apikey = 'W3o37Ar4AR9OeoajDYXRmNIaHAJqr0tPVrmW_8E1jd2kKzQ4R8tu-yLT8g9FFM3K9-qe2ul4A5Lb8XoHUVtk7C0kh8KnxLOIEd7fLjMKWfxEZmXhZKO31a_W0VxWWnYx'


// export default {
//     getRestaurant: fetch('https://api.yelp.com/v3/businesses/search',
//     {
//       method: 'GET',
//       Authorization: 'W3o37Ar4AR9OeoajDYXRmNIaHAJqr0tPVrmW_8E1jd2kKzQ4R8tu-yLT8g9FFM3K9-qe2ul4A5Lb8XoHUVtk7C0kh8KnxLOIEd7fLjMKWfxEZmXhZKO31a_W0VxWWnYx'
//     }
//       )
//       .then((response) =>{
//         console.log(response.json(), 'api.js');
//       //  => response.json())
//       // .then((responseJson) => {
//       //   // console.log (responseJson.Poster);
//       //   // this.setState({
//       //   //   isLoading: false,
//       //   //   dataSource: ds.cloneWithRows(responseJson.movies),
//       //   // }, function() {
//       //   //   // do something with new state
//       //   // });
//       // console.log(responseJson, 'API.JSON');
//       // return responseJson
      
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//     }
    
