import React, {Component} from 'react';
import { Container, Header, Content, ListItem, Text, Body, CheckBox } from 'native-base';


export default class CheckBoxes extends Component {

    state = {
        asian: false,
        bakery: false,
        fastfood: false,
        italian: false,
    }

    handleClickAsian () {
        alert("4bf58dd8d48988d142941735")
    }
    handleClickBakery () {
        alert("4bf58dd8d48988d16a941735")
    }

    handleClickDessert () {
        alert("4bf58dd8d48988d1d0941735")
    }

    handleclickItalian() {
        alert("4bf58dd8d48988d110941735")
    }

    render() {
      return (
        <Container>
            <ListItem>
              <CheckBox
              checked={this.state.asian}
              onPress={this.handleClickAsian}
              />
              <Body>
                <Text>Asian Restaurant</Text>
              </Body>
            </ListItem>

            <ListItem>
              <CheckBox
              checked={false}
              onPress={this.handleclickItalian}
              />
              <Body>
                <Text>Italian Restaurant</Text>
              </Body>
            </ListItem>

            <ListItem>
              <CheckBox
              checked={false}
              onPress={this.handleClickBakery}
              />
              <Body>
                <Text>Bakery</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox
              checked={false}
              onPress={this.handleClickDessert}
              />
              <Body>
                <Text>Dessert</Text>
              </Body>
            </ListItem>
        </Container>
      );
    }
  }
