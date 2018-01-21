import React, { Component } from "react";
import { ScrollView, Platform, FlatList } from "react-native";
import { Container, Input, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, View, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import CheckBox from "../CheckBox";
import API from '../../../../Utils/API'
import {Actions} from 'react-native-router-flux';

const categories = [
  {
    "id": 1,
    "label": "American",
    "categoryID": "4bf58dd8d48988d14e941735",
    "clicked": false
  },
  {
    "id": 2,
    "label": "Chinese",
    "categoryID": "4bf58dd8d48988d10e941735",
    "clicked": false
  },
  {
    "id": 3,
    "label": "Mexican",
    "categoryID": "4bf58dd8d48988d1c1941735",
    "clicked": false
  },
  {
    "id": 4,
    "label": "Italian",
    "categoryID": "4bf58dd8d48988d110941735",
    "clicked": false
  },
  {
    "id": 5,
    "label": "Vegetarian / Vegan Restaurant",
    "categoryID": "4bf58dd8d48988d1d3941735",
    "clicked": false
  },
  {
    "id": 6,
    "label": "Dessert",
    "categoryID": "4bf58dd8d48988d1d0941735",
    "clicked": false
  },
  {
    "id": 7,
    "label": "Greek",
    "categoryID": "4bf58dd8d48988d10e941735",
    "clicked": false
  },
  {
    "id": 8,
    "label": "Japanese",
    "categoryID": "4bf58dd8d48988d111941735",
    "clicked": false
  },
  {
    "id": 9,
    "label": "Thai",
    "categoryID": "4bf58dd8d48988d149941735",
    "clicked": false
  },
  {
    "id": 10,
    "label": "Vietnamese",
    "categoryID": "4bf58dd8d48988d14a941735",
    "clicked": false
  },
  {
    "id": 11,
    "label": "Breakfast",
    "categoryID": "4bf58dd8d48988d143941735",
    "clicked": false
  },
  {
    "id": 12,
    "label": "Indian",
    "categoryID": "4bf58dd8d48988d10f941735",
    "clicked": false
  }
];

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOptions: "1",
      location: "",
      categories
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
    console.log("Submit button pressed", <CheckBox/>);
    // console.log(this.state.numOptions);
    // console.log(this.state.location);
    // console.log(this.props)
    Actions.Results(this.state);

    // this.props.API('4bf58dd8d48988d10f941735', 'Fairfax')

  };

  onAddCategory = Id =>{
    const IdArr = this.state.categoryId
    const categoryId = IdArr.concat(Id) 
    this.setState({categoryId})
    // console.log(this.state.categoryId.concat(Id))
    console.log(this.state.categoryId, 'line44')

  }

  render() {
    return (
      <Container style={{width: 330}} >
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
              placeholder="e.g. Arlington"
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
              <Item label="One" value="1" />
              <Item label="Two" value="2" />
              <Item label="Three" value="3" />
            </Picker>
          </FormItem>
          <FormItem>
            <Text>3) Choose any category that you want included in the search parameters:</Text>
          </FormItem>
          <FormItem style={{justifyContent: 'left', alignItems: 'left', flexDirection: 'column'}}>
            {this.state.categories.map((categories)=>(
              <CheckBox
                id={categories.id}
                label={categories.label}
                checked={this.state.checked}
                onChange={this.handleToggleChecked}
                />
            ))}

          </FormItem>

          {/*<FormItem>
            <CheckBox
              label='American'
              categoryID='4bf58dd8d48988d14e941735'
              onChange={this.onAddCategory}/>
          </FormItem>
          <FormItem>
            <CheckBox
              // label='Chinese'
              // categoryID='4bf58dd8d48988d10e941735'
              // checked={this.state.checked}
              // onChange={this.handleToggleChecked}
              />
          </FormItem>
          <FormItem>
            <CheckBox
              label='Mexican'
              categoryID='4bf58dd8d48988d1c1941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Italian'
              categoryID='4bf58dd8d48988d110941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Vegetarian / Vegan Restaurant'
              categoryID='4bf58dd8d48988d1d3941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Dessert'
              categoryID='4bf58dd8d48988d1d0941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Greek'
              categoryID='4bf58dd8d48988d10e941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Japanese'
              categoryID='4bf58dd8d48988d111941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Thai'
              categoryID='4bf58dd8d48988d149941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Vietnamese'
              categoryID='4bf58dd8d48988d14a941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Breakfast'
              categoryID='4bf58dd8d48988d143941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>
          <FormItem>
            <CheckBox
              label='Indian'
              categoryID='4bf58dd8d48988d10f941735'
              checked={this.state.checked}
              onChange={this.handleToggleChecked}/>
          </FormItem>*/}
          <FormItem style={{justifyContent: 'left'}}>
            <Button style={{backgroundColor: 'white'}}
              onPress={this.handleFormSubmit}
              >
              <Text small style={{color: 'black'}}>Submit</Text>
            </Button>
          </FormItem>
        </Form>
        {/* </ScrollView> */}
      </Container>
    );
  }
}
