import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOptions: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      numOptions: value
    });
  }
  render() {
    return (
      <Container>
        <Text>Choose # of Restaurant choices you want:</Text>
        <Header style={{backgroundColor: '#e35141'}}>
          <Form style={{backgroundColor: 'lightgrey'}}>
            <Picker style={{alignItems: 'center', justifyContent: 'center'}}
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.numOptions}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="One" value="key0" />
              <Item label="Two" value="key1" />
              <Item label="Three" value="key2" />
            </Picker>
          </Form>
        </Header>
      </Container>
    );
  }
}
