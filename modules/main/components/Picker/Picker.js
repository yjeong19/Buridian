import React, { Component } from "react";
import { Platform, ScrollView } from "react-native";
import { Container, Input, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, View, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import CheckBox from "../CheckBox";
import API from '../../../../Utils/API'
import {Actions} from 'react-native-router-flux';


export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOptions: "key0",
      location: "e.g. Ballston",
      categoryId: [];
    };
  }
  onValueChange(value: string) {
    this.setState({
      numOptions: value
    });
  }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit button pressed");
    console.log(this.state.location);
    Actions.Results();
    this.props.Id('4bf58dd8d48988d10f941735,4bf58dd8d48988d1d0941735,4bf58dd8d48988d10e941735')

  };

  onAddCategory = Id =>{
    console.log(event);
  }

  render() {
    return (
      <Container>
        <ScrollView>
        <Form style={{backgroundColor: '#e35141'}}>
          <FormItem>
            <Text>1) Please enter your location (required):</Text>
          </FormItem>
          <FormItem>
            <Input
              style={{backgroundColor: 'white'}}
              onChangeText={(location) => this.setState({location})}
              value={this.state.location}
              name="location"
              type="text"
            />
          </FormItem>
          <FormItem>
            <Text>2) Choose # of Restaurant options you want:</Text>
          </FormItem>
          <FormItem style={{justifyContent: 'center'}}>
            <Picker style={{backgroundColor: 'white'}}
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.numOptions}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="One" value="key0" />
              <Item label="Two" value="key1" />
              <Item label="Three" value="key2" />
            </Picker>
          </FormItem>
          <FormItem>
            <Text>3) Choose any category that you want included in the search parameters:</Text>
          </FormItem>
          <FormItem>
            <CheckBox
              label='American'
              categoryID='4bf58dd8d48988d14e941735'
              onChange={this.onAddCategory}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Chinese'
              categoryID='4bf58dd8d48988d10e941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Mexican'
              categoryID='4bf58dd8d48988d1c1941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Italian'
              categoryID='4bf58dd8d48988d110941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Vegetarian / Vegan Restaurant'
              categoryID='4bf58dd8d48988d1d3941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Dessert'
              categoryID='4bf58dd8d48988d1d0941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Greek'
              categoryID='4bf58dd8d48988d10e941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Japanese'
              categoryID='4bf58dd8d48988d111941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Thai'
              categoryID='4bf58dd8d48988d149941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Vietnamese'
              categoryID='4bf58dd8d48988d14a941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Breakfast'
              categoryID='4bf58dd8d48988d143941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Indian'
              categoryID='4bf58dd8d48988d10f941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Middle Eastern'
              categoryID='4bf58dd8d48988d115941735'
              onChange={(checked) => console.log('Checked!')}/>
          </FormItem>
          <FormItem style={{justifyContent: 'center'}}>
            <Button

              onPress={this.handleFormSubmit}
              >
              <Text small>Submit</Text>
            </Button>
          </FormItem>
        </Form>
        </ScrollView>
      </Container>
    );
  }
}
