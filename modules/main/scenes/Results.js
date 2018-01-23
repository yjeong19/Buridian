import React from 'react';
import { View, StyleSheet, Alert, Text, Linking, ScrollView } from 'react-native';
import {Container} from 'native-base';

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

//import Checkbox
import { color } from "../../../styles/Theme";
import {Picker} from "../components/Picker";
import DecisionSection from "../components/DecisionSection";
import YesOrNoButtons from "../components/YesOrNoButtons";
import API from '../../../Utils/API'
import { actions as auth } from "../../auth"
import PickerExample from '../components/Picker/Picker';
import Home from './Form'

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
        images: ["https://media.boingboing.net/wp-content/uploads/2017/03/surprised-cat-04.jpg", "https://www.hobartcity.com.au/files/assets/public/emergency-management/cat_and_dog-1024x899.jpg?w=1200"]
      }

      componentDidMount(){      
        this.handleRandomizeButton();
        // this.handlePhoto();
      }

      handlePhoto=()=>{
        // console.log("this.props.placeholderImage: " + this.props.placeholderImage);
        // this.setState({imageUrl: this.props.placeholderImage})
        API.getPhoto(this.state.restaurantId)
        .then((response)=> response.json())
        .then((responseJson)=>{
              // let imageUrl = photoObject.map(photos =>{
          //   return photos.prefix + '300x500' + photos.suffix;
          // })
          /// this gives an array of links
          // console.log("responseJson: " + responseJson.response.photos.items[0]);
          console.log("this.placeholderImage: " + this.props.placeholderImage);
          const photoObject = responseJson.response.photos.items[0];
          let imageUrl = photoObject.prefix + '300x500' + photoObject.suffix;
         
          responseJson.response.photos.items[0] ? this.setState({imageUrl}) : this.setState({imageUrl: 'http://lorempicsum.com/futurama/350/200/1'})
        })
      }
         

      handleSettingsPress = ()=>{
        Alert.alert("settings");
      }

      handleRandomizeButton = ()=>{
        const categories = []
        this.props.categoryObj.map(category=>{
          console.log(category, 'map category')
          categories.push(category.categoryID);
        })

        
        // console.log(this.props.categoryObj[0].categoryID, this.props.location)
        API.getRestaurant(categories.join(), this.props.location)
        .then((response)=> response.json())
        .then((data)=>{
          // console.log(data, '------------line 79')
          // let data = JSON.parse(response._bodyInit);
          let i = Math.floor((Math.random() * data.response.venues.length) + 1);
          this.setState({restaurantName: data.response.venues[i].name});
          this.setState({address: data.response.venues[i].location.formattedAddress[0] ? data.response.venues[i].location.formattedAddress[0] : 'testing' });
          this.setState({phone: data.response.venues[i].contact.formattedPhone});
          this.setState({website: data.response.venues[i].url ? data.response.venues[i].url : 'https://www.fousquare.com'});
          //operator below needs to be changed for else
          this.setState({restaurantId: data.response.venues[i].id ? data.response.venues[i].id :'4b0df699f964a520345323e3' });
          this.setState({fourSquarePage: data.response.venues[i].menu.url ? data.response.venues[i].menu.url : 'https://www.foursquare.com'});
          // console.log(data.response.venues[i]);
          // console.log("4sq url" + data.response.venues[i].menu.url);
          this.handlePhoto();
          // console.log(this.props)
          
        });
        // console.log('line 68 ===================', categories, 'end ==========')
        // console.log(this.props);
      }

      handleYesButton = () => {
        Linking.openURL(this.state.fourSquarePage).catch(err => console.error('An error occurred', err));
      }

      handleImagePress = () => {
        console.log("image pressed");
        Actions.ImageSlider();
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
          flex: 1,
          backgroundColor: '#e35141',
          justifyContent: "center",
          alignItems: "center"}}>
        <ScrollView style={{flex:1}}>
          <DecisionSection
            image={this.state.imageUrl}
            style={{flex: 1}}
            randomized={this.handleRandomizeButton}
            restaurantName={this.state.restaurantName}
            address={this.state.address}
            phone={this.state.phone}
            website={this.state.website}
            fourSquarePage={this.handleYesButton}
            handleImagePress={this.handleImagePress}
          />
        </ScrollView>
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

export default connect(mapStateToProps, { signOut })(Results);
