import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
// import Categories from '../categories.json'

const Categories = [  {
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
  }]

export default class Checkbox extends PureComponent {
  state = {
    checked: false
  };


    componentDidMount() {
        this.setState({ checked: this.state.checked })
        // console.log("value of this.state.checked in cDM: " + this.state.checked);

    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({ checked: this.state.checked })
        console.log("State after cDU: " +this.state.checked);

    }

    render() {
        const { checked } = this.state
        // console.log("value of checked in render: " + checked);
        const {
            labelBefore,
            containerStyle,
            checkedComponent,
            uncheckedComponent,
            checkedImage,
            uncheckedImage,
            checkboxStyle,
            labelStyle,
            numberOfLabelLines,
            label
        } = this.props

        return (
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                onPress={this.handleToggleChecked}
            >
                {labelBefore ? (
                    <Label
                        labelStyle={labelStyle}
                        numberOfLabelLines={numberOfLabelLines}
                        label={label}
                    />
                ) : null}

                {checkedComponent && uncheckedComponent ? checked ? (
                    checkedComponent
                ) : (
                    uncheckedComponent
                ) : (
                    <Image
                        style={[styles.checkbox, checkboxStyle]}
                        source={checked ? checkedImage : uncheckedImage}
                    />
                )}

                {!labelBefore && (
                    <Label
                        labelStyle={labelStyle}
                        numberOfLabelLines={numberOfLabelLines}
                        label={label}
                    />
                )}
            </TouchableOpacity>
        )
    }

    handleToggleChecked = () => {   

      const { label } = this.props

      const checked = this.state.checked;
      console.log(label + "'s state when clicked was: " + checked);

      if (checked===false) {
        this.setState({ checked : true});
        // console.log(label +" this.state.checked2: " + this.state.checked);

      }

      else if (checked===true) {
        this.setState({ checked: false});
        // console.log(label + " this.state.checked3: " + this.state.checked);

      }

        // console.log("this.props: ", this.props.label, this.props);
        // const { label } = this.props
        // let isChecked = !this.state.checked
        // console.log(label + " isChecked before setState: " + isChecked);
        // console.log(label + " this.state.checked before setState: " + this.state.checked);
        // console.log(label + " this.props.checked before setState: " + this.props.checked);
        // this.setState({ isChecked })
        // this.props.onChange && this.props.onChange({ label, isChecked })
        // console.log(label + " isChecked after setState: " + isChecked);
        // console.log(label + " this.state.checked after setState: " + this.state.checked);
        // console.log(label + " this.props.checked after setState: " + this.props.checked);
    }
}

const Label = ({ labelStyle, numberOfLabelLines, label }) => (
    <View style={styles.labelContainer}>
        <Text style={[styles.label, labelStyle]} numberOfLines={numberOfLabelLines}>
            {label}
        </Text>
    </View>
)

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 30,
        height: 30
    },
    labelContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    label: {
        fontSize: 16,
        color: '#222'
    }
})

Checkbox.defaultProps = {
    custom: false,
    label: 'Label',
    numberOfLabelLines: 1,
    labelBefore: false,
    checked: false,
    checkedImage: require('./checked.png'),
    uncheckedImage: require('./unchecked.png'),
    checkedComponent: null,
    uncheckedComponent: null
}

Checkbox.propTypes = {
    checkedComponent: PropTypes.element,
    uncheckedComponent: PropTypes.element,
    checked: PropTypes.bool,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    numberOfLabelLines: PropTypes.number,
    onChange: PropTypes.func
}
