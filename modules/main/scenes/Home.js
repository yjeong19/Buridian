import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { color } from "../../../styles/Theme";
// import DashboardWrapper from "../components/DashboardWrapper";
import DecisionSection from "../components/DecisionSection";
import YesOrNoButtons from "../components/YesOrNoButtons";

import { actions as auth } from "../../auth"
var { signOut } = auth;

class Home extends React.Component {
    // constructor(){
    //   super();
    //   this.state = { }
    // }
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
            containerViewStyle={styles.buttonContainer}
            buttonStyle={{}} //optional
            textStyle={styles.buttonText}
            onPress={this.onSignOut.bind(this)}/>
          <DecisionSection image={this.state.url} style={{flex: 1}}/>
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

    buttonContainer:{
        marginVertical:0, marginHorizontal:0
    },

    buttonText:{
        fontWeight:"500"
    }
});
