import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Input, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import CheckBoxes from '../CheckBoxes';


export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOptions: "key0",
      locatoin: ""
    };
  }
  onValueChange(value: string) {
    this.setState({
      numOptions: value
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <Container>
        <Form style={{backgroundColor: '#e35141'}}>
          <FormItem>
            <Input
              style={{backgroundColor: 'white'}}
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location"
              placeholder="Enter Your Location (required)"
            />
          </FormItem>
          <FormItem>
            <Text>Choose # of Restaurant options you want:</Text>
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
            <Text>Choose any category that you want included in the search parameters:</Text>
          </FormItem>
          <FormItem>
            <CheckBoxes
            onPress = {CheckBoxes.handleClickAsian}
            />
          </FormItem>
          <FormItem style={{justifyContent: 'center'}}>
            <Button
              disabled={!(this.state.location)}
              onPress={this.handleFormSubmit}
              >
              <Text small>Submit</Text>
            </Button>
          </FormItem>
        </Form>
      </Container>
    );
  }
}
