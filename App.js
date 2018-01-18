import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Button } from 'native-base';
import LandingPage from './modules/auth/components/LandingPage';
import { Provider } from 'react-redux';
import Router from './config/routes';
import store from './redux/store';



export default class App extends React.Component {
  state={
    url: 'https://picsum.photos/200'
  }
  
  componentDidMount(){
    fetch('https://www.omdbapi.com/?t=deadpool&apikey=trilogy')
    .then((response) => response.json())
    .then((responseJson) => {
      // const responsejson = response.json().then
      console.log(responseJson.Poster, 'this is our response')
      const image = responseJson.Poster
      this.setState({url: image})
      })

    // this.HeaderComponent.handleLogin();
  }

  handleLogin = ()=>{
    let newImage = API.getRestaurant._55;
    // alert('fuck you');
    alert(newImage);
    console.log(newImage._55);

    this.setState({
      url: newImage
    })
  }

  handleSignUp = ()=>{
    this.setState({url: 'https://picsum.photos/200/300/?random'})
  }
  
  

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>

    );
  }
}
