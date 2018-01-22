import React, { Component } from "react";
import { ScrollView, Platform, FlatList } from "react-native";
import { Container, Input, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, View, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import CheckBox from "../CheckBox";
import API from '../../../../Utils/API'
import {Actions} from 'react-native-router-flux';
import Checkbox from "../CheckBox/CheckBox";

const categories = [
  {
    "id": 1,
    "label": "American",
    "categoryID": "4bf58dd8d48988d14e941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
  },
  {
    "id": 2,
    "label": "Chinese",
    "categoryID": "4bf58dd8d48988d10e941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png"
  },
  {
    "id": 3,
    "label": "Mexican",
    "categoryID": "4bf58dd8d48988d1c1941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png"
  },
  {
    "id": 4,
    "label": "Italian",
    "categoryID": "4bf58dd8d48988d110941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
  },
  {
    "id": 5,
    "label": "Vegetarian / Vegan Restaurant",
    "categoryID": "4bf58dd8d48988d1d3941735",
    "clicked": false,
    "placeholderImage": "https://dixiediner.com/wp-content/uploads/2014/10/vegan-VEGETARIAN.jpg"
  },
  {
    "id": 6,
    "label": "Dessert",
    "categoryID": "4bf58dd8d48988d1d0941735",
    "clicked": false,
    "placeholderImage": "https://www.ebuzztoday.com/wp-content/uploads/21-lip-smacking-chocolate-desserts-made-easier-collage.jpg"
  },
  {
    "id": 7,
    "label": "Greek",
    "categoryID": "4bf58dd8d48988d10e941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2000px-Flag_of_Greece.svg.png"
  },
  {
    "id": 8,
    "label": "Japanese",
    "categoryID": "4bf58dd8d48988d111941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png"
  },
  {
    "id": 9,
    "label": "Thai",
    "categoryID": "4bf58dd8d48988d149941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png"
  },
  {
    "id": 10,
    "label": "Vietnamese",
    "categoryID": "4bf58dd8d48988d14a941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png"
  },
  {
    "id": 11,
    "label": "Breakfast",
    "categoryID": "4bf58dd8d48988d143941735",
    "clicked": false,
    "placeholderImage": "https://s3-media4.fl.yelpcdn.com/bphoto/VqkfgXfqk5SWTFnf6JabvQ/o.jpg"
  },
  {
    "id": 12,
    "label": "Indian",
    "categoryID": "4bf58dd8d48988d10f941735",
    "clicked": false,
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
  }
];

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOptions: 1,
      location: "",
      categories,
      categoryObj: []
    };
  }
  onValueChange(value: integer) {
    console.log(this.state.numOptions)
    this.setState({
      numOptions: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit button pressed", console.log(CheckBox.handleToggleChecked));
    // console.log(this.state.numOptions);
    // console.log(this.state.location);
    if(this.state.location.trim() === ''){
      alert('Please complete the form')
    }
    else{
    Actions.Results({
      categoryObj: this.state.categoryObj,
      location: this.state.location,
      counter: this.state.numOptions
    });
  }

    // this.props.API('4bf58dd8d48988d10f941735', 'Fairfax')

  };

  onAddCategory = obj =>{

    if(typeof obj== 'object'){
    const IdArr = this.state.categoryObj
    console.log(obj, IdArr, 'line 138')
      if (IdArr=== undefined){
        IdArr = []
      }
    const categoryObj = IdArr.concat(obj) 
    // this.setState({categoryId}
    // console.log(this.state.categoryId.concat(Id))

    this.setState({categoryObj})
    // console.log(this.state.categoryObj, '140 Picker.js')
    }
    else if(typeof obj == 'string'){
      const categoryArr = this.state.categoryObj
      console.log(this.state.categoryObj, 'line 151------------')
      if (categoryArr === undefined){
        categoryArr =this.state.categoryObj
      }
      let categoryObj = categoryArr.forEach((catObj, i)=>{
        if(catObj.label === obj){
          alert('fuck')
         categoryObj = categoryArr.splice(i, 1)
         this.setState({categoryObj})
        }
      })

    }
   

  }

  render() {
    return (
      <Container style={{width: 330}} >
        <Form style={{backgroundColor: 'white', borderRadius: 20, marginTop: 20}}>
          <FormItem style ={{marginTop: 20}}>
            <Text style ={{fontWeight: 'bold'}}>1) Please enter your location (required):</Text>
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
            <Text style ={{fontWeight: 'bold'}}>2) Choose # of Restaurant options you want:</Text>
          </FormItem>
          <FormItem style={{justifyContent: 'center', color: 'white', padding: 10}}>
            <Picker style={{backgroundColor: 'lightgrey', width: 100, justifyContent:'center'}}
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.numOptions}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="One" value={1} />
              <Item label="Two" value={2} />
              <Item label="Three" value={3} />
            </Picker>
          </FormItem>
          <FormItem>
            <Text style ={{fontWeight: 'bold'}}>3) Choose any category that you want included in the search parameters:</Text>
          </FormItem>
          <ScrollView>
          <FormItem style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
            {this.state.categories.map((categories)=>(
              <CheckBox
                key={categories.id}
                id={categories.id}
                label={categories.label}
                checked={this.state.checked}
                // onChange={this.handleToggleChecked}
                categoryArr = {this.state.categories}
                addCategory={this.onAddCategory}
                />
            ))}
          </FormItem>
          <FormItem style={{justifyContent: 'center', padding: 10}}>
            <Button style={{backgroundColor: 'lightgrey', }}
              onPress={this.handleFormSubmit}
              >
              <Text small style={{color: 'black'}}>Submit</Text>
            </Button>
          </FormItem>
        </ScrollView>
        </Form>
      </Container>
    );
  }
}
