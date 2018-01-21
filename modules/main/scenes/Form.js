import React from 'react';
import { ScrollView, View, StyleSheet, Alert, Text, Linking } from 'react-native';
import {Container} from 'native-base';

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

//import Checkbox
import { color } from "../../../styles/Theme";
import Picker from "../components/Picker";
import DecisionSection from "../components/DecisionSection";
import YesOrNoButtons from "../components/YesOrNoButtons";
import API from '../../../Utils/API'
import { actions as auth } from "../../auth"
import Results from './Results';

var { signOut } = auth;

class Home extends React.Component {
    state={
        imageUrl: '',
        restaurantName: "",
        address: "",
        phone: "",
        website: "",
        restaurantId: '',
        fourSquarePage: "",
        numOptions: "",
        asian: false
      }

      componentDidMount(){
        console.log("login successful...Form page loaded");
      }

      handleAPI = ()=>{
        API.getRestaurant()
        .then((res)=> res.json())
        .then((resJson)=>{
          // console.log(resJson);
        })

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

    handleRandomizeButton = (category, near)=>{
      API.getRestaurant(category, near)
      .then((response)=> response.json())
      .then((data)=>{
        // let data = JSON.parse(response._bodyInit);
        let i = Math.floor((Math.random() * data.response.venues.length) + 1);
        this.setState({restaurantName: data.response.venues[i].name});
        this.setState({address: data.response.venues[i].location.formattedAddress[0]});
        this.setState({phone: data.response.venues[i].contact.formattedPhone});
        this.setState({website: data.response.venues[i].url});
        this.setState({restaurantId: data.response.venues[i].id});
        this.setState({fourSquarePage: data.response.venues[i].menu.url});
        // console.log(data.response.venues[i]);
        // console.log("4sq url" + data.response.venues[i].menu.url);
        this.handlePhoto();
      });
    }

    handlePhoto=()=>{
      API.getPhoto(this.state.restaurantId)
      .then((response)=> response.json())
      .then((responseJson)=>{
        if(!responseJson.response.photos.items){
          this.setState({imageUrl: 'http://lorempicsum.com/futurama/350/200/1'})
          console.log(this.state.url)
        }
        else{
          const photoObject = responseJson.response.photos.items[0];
          // let imageUrl = photoObject.map(photos =>{
          //   return photos.prefix + '300x500' + photos.suffix;
          // })
          /// this gives an array of links

          let imageUrl = photoObject.prefix + '300x500' + photoObject.suffix


          console.log(imageUrl)
          this.setState({imageUrl})
        }
      })
    }

    render() {
      return (
        <Container style={{
          backgroundColor: '#e35141',
          alignItems: "center"}}>
            <Picker
              numOptions={this.state.numOptions}
              style={{flex:1}}
              API = {this.handleRandomizeButton} />
            <Button
              raised
              title={'LOG OUT'}
              borderRadius={4}
              backgroundColor={color.main}
              containerViewStyle={{marginVertical:0, marginHorizontal:0}}
              buttonStyle={{}} //optional
              textStyle={{fontWeight: "500"}}
              onPress={this.onSignOut.bind(this)}/>
        </Container>
      );
    }
}

function mapStateToProps(state, props) {
    return {
        user:  state.authReducer.user
    }
}

export default connect(mapStateToProps, { signOut })(Home);
