// import {Text, StyleSheet, View, SafeAreaView, Alert} from 'react-native';
// import React, {Component} from 'react';
// import {Header, GradienBlock} from '../../component';
// import {navigateToScreen} from '../../utils/navigator';
// import {DocumentView, RNPdftron, Config} from 'react-native-pdftron';
// export default class FileViewer extends Component {
//   onLeadingNavButtonPressed = () => {
//     console.log('leading nav button pressed');
//     if (this._viewer) {
//       this._viewer.exportAnnotations().then(xfdf => {
//         console.log('xfdf', xfdf);
//       });
//     }

//     if (Platform.OS === 'ios') {
//       Alert.alert(
//         'App',
//         'onLeadingNavButtonPressed',
//         [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//         {cancelable: true},
//       );
//     } else {
//       BackHandler.exitApp();
//     }
//   };
//   onDocumentLoaded = () => {
//     // if (this._viewer) {
//     //   const xfdf = '<?xml version="1.0" encoding="UTF-8"?>\n<xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve">\n\t<annots>\n\t\t<circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202215Z" flags="print" date="D:20190729202215Z" page="0" rect="138.824,653.226,236.28,725.159" title="" />\n\t\t<circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202215Z" flags="print" date="D:20190729202215Z" page="0" rect="103.114,501.958,245.067,590.92" title="" />\n\t\t<circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202216Z" flags="print" date="D:20190729202216Z" page="0" rect="117.85,336.548,328.935,451.568" title="" />\n\t\t<freetext TextColor="#363636" style="solid" width="0" opacity="1" creationdate="D:20190729202455Z" flags="print" date="D:20190729202513Z" page="0" rect="320.774,646.323,550.446,716.498" title="">\n\t\t\t<defaultstyle>font: Roboto 24pt;color: #363636</defaultstyle>\n\t\t\t<defaultappearance> 1 1 1 RG 1 1 1 rg /F0 24 Tf </defaultappearance>\n\t\t\t<contents>HELLO PDFTRON!!!</contents>\n\t\t\t<apref y="716.498" x="320.774" gennum="0" objnum="404" />\n\t\t</freetext>\n\t\t<line style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202507Z" flags="print" start="278.209,212.495" end="214.177,411.627" head="None" tail="OpenArrow" date="D:20190729202507Z" page="0" rect="206.039,211.73,280.589,416.387" title="" />\n\t</annots>\n\t<pages>\n\t\t<defmtx matrix="1.333333,0.000000,0.000000,-1.333333,0.000000,1056.000000" />\n\t</pages>\n\t<pdf-info version="2" xmlns="http://www.pdftron.com/pdfinfo" />\n</xfdf>';
//     //   this._viewer.importAnnotations(xfdf);
//     // }
//   };

//   onAnnotationChanged = ({action, annotations}) => {
//     // console.log('action', action);
//     // console.log('annotations', annotations);
//     // if (this._viewer) {
//     //   this._viewer.exportAnnotations({annotList: annotations}).then((xfdf) => {
//     //     console.log('xfdf for annotations', xfdf);
//     //   });
//     // }
//   };

//   onZoomChanged = ({zoom}) => {
//     // console.log('zoom', zoom);
//   };

//   onExportAnnotationCommand = ({action, xfdfCommand}) => {
//     console.log('action', action);
//     console.log('xfdfCommand', xfdfCommand);
//   };
//   render() {
//     const path =
//       'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf';
//     return (
//       <SafeAreaView style={styles.container}>
//         <Header title={''} />

//         <DocumentView
//           ref={c => (this._viewer = c)}
//           document={path}
//           padStatusBar={true}
//           showLeadingNavButton={true}
//           leadingNavButtonIcon={
//             Platform.OS === 'ios'
//               ? 'ic_close_black_24px.png'
//               : 'ic_arrow_back_white_24dp'
//           }
//           onLeadingNavButtonPressed={this.onLeadingNavButtonPressed}
//           onDocumentLoaded={this.onDocumentLoaded}
//           onAnnotationChanged={this.onAnnotationChanged}
//           onExportAnnotationCommand={this.onExportAnnotationCommand}
//           onZoomChanged={this.onZoomChanged}
//           readOnly={false}
//           disabledElements={[Config.Buttons.userBookmarkListButton]}
//           disabledTools={[
//             Config.Tools.annotationCreateLine,
//             Config.Tools.annotationCreateRectangle,
//           ]}
//           fitMode={Config.FitMode.FitPage}
//           layoutMode={Config.LayoutMode.Continuous}
//         />
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//   },
//   tool: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   block: {
//     width: 120,
//     height: 120,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//   },
// });

import React, {Component} from 'react';
import {
  View,
  Modal,
  Text,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  BackHandler,
  Alert,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {} from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import {DocumentView, RNPdftron, Config} from 'react-native-pdftron';
// import Dialog from 'react-native-dialog';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import { goBack, gotBackToRoot } from '../../utils/navigator';
const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    RNPdftron.initialize('');
    this.state = {
      isShow: false,
      fileName: this.props.file.name || '',
      uri: '',
    };
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.requestStoragePermission();
    }
  }

  async requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          // permissionGranted: true
        });
        console.log('Storage permission granted');
      } else {
        this.setState({
          // permissionGranted: false
        });
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  onLeadingNavButtonPressed = () => {
    goBack(this.props.componentId)
  };

  onDocumentLoaded = () => {

  };

  onAnnotationChanged = ({action, annotations}) => {
    
  };

  onZoomChanged = ({zoom}) => {
    // console.log('zoom', zoom);
  };

  onExportAnnotationCommand = ({action, xfdfCommand}) => {
    console.log('action', action);
    console.log('xfdfCommand', xfdfCommand);
  };

  onSaveFile = async () => {
    // const { config, fs } = RNFetchBlob;
    let {fileName, uri} = this.state
    if(fileName?.includes('.pdf')){
      fileName = fileName
    } else{
      fileName = fileName + '.pdf'
    }
    let RootDir = fs.dirs.DocumentDir;
    let options = {
      fileCache: true,
      indicator: true,
      override: true,
      addAndroidDownloads: {
        path: RootDir + fileName ,
        description: "downloading file...",
        notification: true,
        useDownloadManager: true,
        mediaScannable: true,
      },
    };
    config(options)
      .fetch("GET", uri)
      .then((res) => {
        console.log("res -> ", JSON.stringify(res), {
          "Cache-Control": "no-store",
        });
      }).catch(err=>{
        console.log('=====err====',err)
      })
  };
  render() {
    const {file} = this.props
    const {isShow, fileName} = this.state;
    const path =
      'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf';

    return (  
      <View style={{flex: 1}}>
        <DocumentView
          ref={c => (this._viewer = c)}
          // document={path}
          document={file.uri}
          padStatusBar={true}
          showLeadingNavButton={true}
          leadingNavButtonIcon={
            Platform.OS === 'ios'
              ? 'ic_close_black_24px.png'
              : 'ic_arrow_back_white_24dp'
          }
          onLeadingNavButtonPressed={this.onLeadingNavButtonPressed}
          onDocumentLoaded={this.onDocumentLoaded}
          onAnnotationChanged={this.onAnnotationChanged}
          onExportAnnotationCommand={this.onExportAnnotationCommand}
          onZoomChanged={this.onZoomChanged}
          readOnly={false}
          disabledElements={[Config.Buttons.userBookmarkListButton]}
          disabledTools={[
            Config.Tools.annotationCreateLine,
            Config.Tools.annotationCreateRectangle,
          ]}

          // fitMode={Config.FitMode.FitPage}
          // layoutMode={Config.LayoutMode.Continuous}
          // onSavedSignaturesChanged
        />
        {/* <View style={styles.absobute}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() =>
              this._viewer
                .saveDocument()
                .then(res => {
                  this.setState({
                    isShow: true,
                    uri: res,
                  });
                })
                .catch(error => console.log('====error===', error))
            }>
            <Text style={styles.txt}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() =>
              this._viewer
                .saveDocument()
                .then(res => console.log('====res===', res))
                .catch(error => console.log('====error===', error))
            }>
            <Text style={styles.txt}>Share</Text>
          </TouchableOpacity>
        </View> */}
        <Modal visible={isShow} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.child}>
              <Text style={styles.filename}>Tên file:</Text>
              <TextInput
                style={styles.input}
                value={fileName}
                onChangeText={txt =>
                  this.setState({
                    fileName: txt,
                  })
                }
              />
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => this.setState({isShow: false})}
                  style={[styles.button, {borderRightWidth: 0.5}]}>
                  <Text style={styles.txtBtn}>Cancle</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.onSaveFile}
                  style={styles.button}>
                  <Text style={styles.txtBtn}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  txt: {
    color: 'white',
  },
  absobute: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 60,
    right: 30,
    flexDirection: 'row',
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    backgroundColor: '#EEEEEE',
    borderRadius: 7,
    width: width * 0.9,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    // marginTop:10,
    marginHorizontal: 12,
  },
  filename: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 12,
  },
  txtBtn: {
    // color: 'black',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
  },
});
