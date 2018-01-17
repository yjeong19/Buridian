import React from 'react';
import { View } from 'react-native';
import { Container, Button } from 'native-base';
import HeaderComponent from './src/Components/HeaderComponent'
import LandingPage from './src/Components/LandingPage'
import DecisionSection from './src/Components/DecisionSection'
import API from './src/Utils/API'



export default class App extends React.Component {
  state={
    url: 'https://picsum.photos/200'
  }
  
  componentDidMount(){
    fetch('https://www.omdbapi.com/?t=frozen&apikey=trilogy')
    .then((response) => response.json())
    .then((responseJson) => {
      // const responsejson = response.json().then
      console.log(responseJson.Poster, 'this is our response')
      const image = responseJson.Poster
      this.setState({url: image})
      })

  }
  
  
  render() {
    return (
      <Container style={{ backgroundColor: '#e35141' }}>
        <HeaderComponent />
        {/* <LandingPage /> */}
        <DecisionSection image={this.state.url}/>

      </Container>
    );
  }
}
