import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


type Props = {};
export default class WelcomePage extends Component <Props> {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.timer = setTimeout(()=>{
      const {navigation} =this.props;
      navigation.navigate("Main");
    },2000);
  }
  componentWillMount() {
    this.timer&&clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WelcomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
