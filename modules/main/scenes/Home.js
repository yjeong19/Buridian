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
    state={
        url: '',
        restaurantName: "",
        address: "",
        phone: "",
        website: "",
        restaurantId: ''
      }

      componentDidMount(){
        this.handleRandomizeButton();
        // this.handlePhoto();
      }

      handlePhoto=()=>{
        API(this.state.restaurantId)
        .then((response)=> response.json())
        .then((responseJson)=>{
          console.log(responseJson.response.photos.items)
          let photoObject = responseJson.response.photos.items[0];

          if(!photoObject){
            this.setState({url: 'http://lorempicsum.com/futurama/350/200/1'})
            console.log(this.state.url)
          }
          else{
            const imageUrl = photoObject.prefix + '300x500' + photoObject.suffix;
            this.setState({url: imageUrl})
          }
        })
      }

      

      handleRandomizeButton = ()=>{

        RandomRestaurant.then((response)=>{
          let data = JSON.parse(response._bodyInit);
          let i = Math.floor((Math.random() * data.response.venues.length) + 1);
          this.setState({restaurantName: data.response.venues[i].name});
          this.setState({address: data.response.venues[i].location.formattedAddress[0]});
          this.setState({phone: data.response.venues[i].location.formattedphone});
          this.setState({website: data.response.venues[i].url});
          this.setState({restaurantId: data.response.venues[i].id})
          this.handlePhoto();
          // console.log(data.response.venues[i].name, '74');
          // console.log(data.response.venues[i].id,'75')
          // console.log(this.state, '76')
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
            restaurantName={this.state.restaurantName}
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
