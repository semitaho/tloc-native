import React, { Component } from 'react'; 
import {
  ListView,
  Text,
  View,
  Slider,
  Picker,
  AsyncStorage
} from 'react-native';
import Section from './section.js';

export default class Settings extends Component{

  constructor(){
    super();
    this.state = {radius: 1000,  gasstations: false};
    this.changeSwitchValue = this.changeSwitchValue.bind(this);
  }
  

  componentWillUnmount(){
    console.log('unmountin');
  }
  
   
  render(){
    return (<View style={{flex: 1}}>
              <Section title="Search type of interest">
                  <Picker
                          selectedValue={this.props.type} 
                          onValueChange={(val) => this.props.valueChanged('type', val)}>
                    <Picker.Item label="Eating" value="restaurant" />
                    <Picker.Item label="Post office" value="post_office" />
                    <Picker.Item label="Bicycle store" value="bicycle_store" />
                  </Picker>
              </Section>
              
              <Section title="Map type">
                  <Picker 
                          selectedValue={this.props.mapType} 
                          onValueChange={val => this.props.valueChanged('mapType', val)}>
                    <Picker.Item label="Standard" value="standard" />
                    <Picker.Item label="Satellite" value="satellite" />
                    <Picker.Item label="Hybrid" value="hybrid" />
                  </Picker>
              </Section>
              
              <Section title="Search radius">
                <Slider minimumValue={100} onSlidingComplete={this.props.radiusChanged}  value={this.props.radius} onValueChange={(val) => this.props.changeValue('radius', val) } step={100} maximumValue={5000} />
                <Text>Current radius {this.props.radius} meters</Text>
              </Section>
              
              <Section title="Sort places">
                <Picker 
                          selectedValue={this.props.mapType} 
                          onValueChange={val => this.props.valueChanged('mapType', val)}>
                    <Picker.Item label="Alphabetically" value="standard" />
                    <Picker.Item label="Satellite" value="satellite" />
                    <Picker.Item label="Hybrid" value="hybrid" />
                </Picker>
              </Section>
            </View>)
  }

  changeSwitchValue(property, value){
    }

}