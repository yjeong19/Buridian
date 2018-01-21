import React from 'react';
var { View, StyleSheet, Alert, Text, Linking } = require('react-native');
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

    render() {
      return (
        <Container style={{
          backgroundColor: '#e35141',
          alignItems: "center"}}>
            <Picker
              numOptions={this.state.numOptions} />
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
