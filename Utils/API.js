import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

const apikey = 'W3o37Ar4AR9OeoajDYXRmNIaHAJqr0tPVrmW_8E1jd2kKzQ4R8tu-yLT8g9FFM3K9-qe2ul4A5Lb8XoHUVtk7C0kh8KnxLOIEd7fLjMKWfxEZmXhZKO31a_W0VxWWnYx'


export default {
    getRestaurant: fetch('https://api.yelp.com/v3/businesses/search',
    {
      method: 'GET',
      headers: apikey
    }

      )
      .then((response) =>{
        console.log(response.json(), 'api.js');
      //  => response.json())
      // .then((responseJson) => {
      //   // console.log (responseJson.Poster);
      //   // this.setState({
      //   //   isLoading: false,
      //   //   dataSource: ds.cloneWithRows(responseJson.movies),
      //   // }, function() {
      //   //   // do something with new state
      //   // });
      // console.log(responseJson, 'API.JSON');
      // return responseJson
      
      })
      .catch((error) => {
        console.error(error);
      })
    }
    
