import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {Header, GradienBlock} from '../../component';
import {navigateToScreen} from '../../utils/navigator';
import RNImageToPdf from 'react-native-image-to-pdf';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';

export default class HomeView extends Component {
  onLibraryPress = async () => {
    const options = {
      maxWidth: 200,
      maxHeight: 200,
      mediaType: 'photo',
    };

    if (Platform.OS === 'ios') {
      launchImageLibrary(options, response => {
        if (!response) return;
        if (response.didCancel) return;
        if (response.errorCode) {
        }
        let source = response;
        if (source && source?.assets) {
          this.myAsyncPDFFunction(source.assets[0].uri);
        }
      });
    } else {
      launchImageLibrary(options, response => {
        if (!response) return;
        if (response.didCancel) return;
        if (response.errorMessage) {
        }
        let source = response;
        if (source && source?.assets) {
          this.myAsyncPDFFunction(source.assets[0].uri);
        }
      });
    }
  };

  myAsyncPDFFunction = async image => {
    try {
      const options = {
        imagePaths: [`${image?.replace('file://', '')}`],
        name: Math.random() + '.pdf',
        width: 2000,
        height: 2000,
        quality: 100,
      };
      const pdf = await RNImageToPdf.createPDFbyImages(options);
      navigateToScreen(this.props.componentId,'FileViewer',{file: {uri: pdf.filePath}})
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const path =
      'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf';
    return (
      <SafeAreaView style={styles.container}>
        <Header title={'Trình chỉnh sửa PDF'} />

        <Text style={styles.tool}>Công cụ</Text>
        <View>
          <GradienBlock
            onPress={
              () => navigateToScreen(this.props.componentId, 'MyFileView')
              // navigateToScreen(this.props.componentId, 'FileViewer')
            }
            title={'Tệp của tôi'}
            style={styles.block}
          />
        </View>
        <GradienBlock
          onPress={this.onLibraryPress}
          title={'Chọn hình ảnh'}
          style={styles.block}
          color={['#FFCC66', '#00FF33']}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  tool: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  block: {
    // width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 15,
  },
});
