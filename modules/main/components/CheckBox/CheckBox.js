import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
// import Categories from '../categories.json'

export default class Checkbox extends PureComponent {
  state = {
    checked: false,
    label: '',
    categories: '',
    arrIndex: ''
  };


    componentDidMount() {
        this.setState({ checked: this.state.checked })
        // console.log("value of this.state.checked in cDM: " + this.state.checked);
    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({ checked: this.state.checked })
        // console.log("State after cDU: " + this.state.categories + ' and ' + this.state.label);
        this.props.addCategory(this.state.categories)
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
      const categoryArr = this.props.categoryArr
      const checked = this.state.checked;
      console.log(this.state.categories, 'CheckBox89 before check');

      if (checked===false) {
        this.setState({ checked : true});
        this.setState({label})

        const categoryObj = categoryArr.forEach((category, i) => {
            if(category.label === label){
                const catArr = this.state.categories
                const categories = categoryArr[i];
                this.setState({categories})
                // console.log(this.state, 'line 101  checkbox')    
            }
        });

        return this.state
      }

      else if (checked===true) {
        let categories = this.state.categories;       
        this.setState({categories: categories.label});
        this.setState({ checked: false});
        this.setState({label: ''})   
        return this.state
        // console.log(this.state, 'line 125  checkbox')
      }
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
