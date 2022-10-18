import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {connect} from 'react-redux';
import {Header} from '../../component';
import * as types from '../../redux/actions/types';
import images from '../../themes/Images';
import {navigateToScreen} from '../../utils/navigator';



class MyFileView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  onSelectFile = async () => {
    const response = await DocumentPicker.pickMultiple({
      presentationStyle: 'fullScreen',
      // type: 'application/pdf',
    });
    if (response.length > 0) {
      this.props.addFile(response);
    }
  };

  renderFile = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigateToScreen(this.props.componentId, 'FileViewer', {file:item});
        }}
        style={[styles.itemContainer, {marginTop: index === 0 ? 15 : 0}]}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  empty=()=>{
    return(
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
        <Image
          source={images.empty}
          style={styles.emptyImage}
        />
        <Text style={{fontSize:25}}>Trống</Text>
      </View>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          onBack
          componentId={this.props.componentId}
          title={'Tệp của tôi'}
          style={styles.header}
        />

        <FlatList
          data={this.props.fileData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFile}
          ListEmptyComponent={this.empty}
          contentContainerStyle={{flexGrow:1}}
        />

        <TouchableOpacity onPress={this.onSelectFile} style={styles.addButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eeee'
  },
  tool: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  block: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: 'aqua',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  itemContainer: {
    backgroundColor: 'gray',
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  header: {
    marginHorizontal: 20,
  },
  emptyImage:{
    width:150,
    height:150,
    resizeMode:'contain',
    tintColor:'rgba(0,0,0,0.5)'
  }
});

const mapStateToProps = state => {
  return {
    // user: state.auth,
    fileData: state.fileReducer.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFile: data => {
      dispatch({
        type: types.ADD_FILE,
        data: data,
      });
    },
    // getMarketSneaker: onComplete => {
    //   dispatch(getMarketSneaker(onComplete));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFileView);
