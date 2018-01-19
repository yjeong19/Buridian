import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { color } from "../../../styles/Theme";
// import DashboardWrapper from "../components/DashboardWrapper";
import DecisionSection from "../components/DecisionSection";
import YesOrNoButtons from "../components/YesOrNoButtons";
import API from '../../../Utils/API'
import RandomRestaurant from '../../../Utils/RandomRestaurant'
import { actions as auth } from "../../auth"
var { signOut } = auth;

class Home extends React.Component {
    // constructor(){
    //   super();
    //   this.state = { }
    // }
    state={
        url: 'https://picsum.photos/200',
        restaurantName: "",
        address: "",
        phone: "",
        website: ""
      }

      componentDidMount(){
        fetch('https://www.omdbapi.com/?t=deadpool&apikey=trilogy')
        .then((response) => response.json())
        .then((responseJson) => {
    // const responsejson = response.json().then
            const image = responseJson.Poster
            this.setState({url: image})
        })
      }

      // handleLogin = ()=>{
      //   let newImage = API.getRestaurant._55;
      //   // alert('fuck you');
      //   alert(newImage);
      //   console.log(newImage._55);

      //   this.setState({
      //     url: newImage
      //   })
      // }

      handleRandomizeButton = ()=>{

        RandomRestaurant.then((response)=>{
          let data = JSON.parse(response._bodyInit);
          let i = Math.floor((Math.random() * data.response.venues.length) + 1);
          this.setState({restaurantName: data.response.venues[0].name});
          this.setState({address: data.response.venues[0].location.formattedAddress[0]});
          this.setState({phone: data.response.venues[0].location.formattedphone});
          this.setState({website: data.response.venues[0].url});
          console.log(data.response.venues[i].name);
        });

      }


    onSignOut() {
      this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
      Actions.replace("Auth")
    }

    onError(error) {
      Alert.alert('Oops!', error.message);
    }

    render() {
      return (
        <View style={styles.container}>
          <Button
            raised
            title={'LOG OUT'}
            borderRadius={4}
            backgroundColor={color.main}
            containerViewStyle={{marginVertical:0, marginHorizontal:0}}
            buttonStyle={{}} //optional
            textStyle={styles.buttonText}
            onPress={this.onSignOut.bind(this)}/>
          <DecisionSection
            image={this.state.url}
            style={{flex: 1}}
            randomized={this.handleRandomizeButton}
            />
        </View>
      );
    }
}

function mapStateToProps(state, props) {
    return {
        user:  state.authReducer.user
    }
}

export default connect(mapStateToProps, { signOut })(Home);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText:{
        fontWeight:"500"
    }
});
