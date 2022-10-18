import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default class GradienBlock extends Component {
  render() {
    const {
      style,
      title,
      topComponent,
      color = ['#4c669f', '#3b5998', '#192f6a'],
      start = {x: 0, y: 0},
      end = {x: 1, y: 0},
      onPress = () => {},
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={color}
          start={start}
          end={end}
          style={[styles.linearGradient, style]}>
          {topComponent && topComponent}
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {},
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
