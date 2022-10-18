import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../themes/Images';
import {goBack} from '../../utils/navigator';

export class Header extends Component {
  render() {
    const {title, onBack, componentId, style} = this.props;
    return (
      <View style={[styles.container, style]}>
        {onBack && (
          <TouchableOpacity onPress={() => goBack(componentId)}>
            <Image source={images.ic_back} style={styles.back} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {onBack && <View style={{width: 20}} />}
      </View>
    );
  }
}

export default Header;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  back: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
});
