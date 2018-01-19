import React, {Component} from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';


export default class CheckBoxExample extends Component {

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

    handleClickDesert () {
        alert("4bf58dd8d48988d1d0941735")
    }

    handleclickItalian() {
        alert("4bf58dd8d48988d110941735")
    }

    render() {
      return (
        <Container style={{width: 360}}>
          <Header />
          <Content>
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
              onPress={this.handleClickDesert}
              />
              <Body>
                <Text>Desert</Text>
              </Body>
            </ListItem>
          </Content>
        </Container>
      );
    }
  }