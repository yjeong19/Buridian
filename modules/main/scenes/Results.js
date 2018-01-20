import React from 'react';
import { View, StyleSheet, Alert, Text, Linking, ScrollView } from 'react-native';
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
import PickerExample from '../components/Picker/Picker';
var { signOut } = auth;

class Results extends React.Component {
    state={
        imageUrl: '',
        restaurantName: "",
        address: "",
        phone: "",
        website: "",
        restaurantId: '',
        fourSquarePage: "",
        numOptions: "",
        categoryId: [],
        asian: false
      }

      componentDidMount(){
        this.handleRandomizeButton();
        // this.handlePhoto();
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

      handleAPI = ()=>{
        API.getRestaurant()
        .then((res)=> res.json())
        .then((resJson)=>{
          // console.log(resJson);
        })

      }

      handleSettingsPress = ()=>{
        Alert.alert("settings");
      }



      handleRandomizeButton = (x)=>{
        API.getRestaurant(x)
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

      handleYesButton = () => {
        Linking.openURL(this.state.fourSquarePage).catch(err => console.error('An error occurred', err));
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
        <Container style={{
          backgroundColor: '#e35141',
          justifyContent: "center",
          alignItems: "center"}}>
          {/* <Picker
            numOptions={this.state.numOptions} /> */}
            <ScrollView style={{flex:1}}>
          {/* <View
            style={{flex:1}}>
            </View> */}
            <Picker
              numOptions={this.state.numOptions}
              categoryId = {this.state.categoryId}
              Id={this.handleRandomizeButton}
               />
          <DecisionSection
            image={this.state.imageUrl}
            style={{flex: 1}}
            randomized={this.handleRandomizeButton}
            restaurantName={this.state.restaurantName}
            address={this.state.address}
            phone={this.state.phone}
            website={this.state.website}
            fourSquarePage={this.handleYesButton}
            />
               </ScrollView>

{/*
            <Button
              raised
              title={'LOG OUT'}
              borderRadius={4}
              backgroundColor={color.main}
              containerViewStyle={{marginVertical:0, marginHorizontal:0}}
              buttonStyle={{}} //optional
              textStyle={{fontWeight: "500"}}
              onPress={this.onSignOut.bind(this)}/>
        </View>*/}
        </Container>
      );
    }
}

function mapStateToProps(state, props) {
    return {
        user:  state.authReducer.user
    }
}

export default connect(mapStateToProps, { signOut })(Results);