import React, {Component} from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

const apikey = 'Bh1GkdpN9hf4X2B784KNXNkwrIIHberMpkM16VUrtqegR4UHhy2M88fHrMwARNF49hd57lz9tDjZV8GKi-iBS9hsJTFU4uSi9S2mivitgNjp6SsxX3zejntqF3RfWnYx'


export default {
    getRestaurant: fetch('https://www.omdbapi.com/?t=frozen&apikey=trilogy')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log (responseJson.Poster);
        // this.setState({
        //   isLoading: false,
        //   dataSource: ds.cloneWithRows(responseJson.movies),
        // }, function() {
        //   // do something with new state
        // });
        console.log(responseJson);
       return responseJson;
      })
      .catch((error) => {
        console.error(error);
      })
    }
