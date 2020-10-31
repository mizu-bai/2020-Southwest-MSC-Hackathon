import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import { WebView } from 'react-native-webview';
import News from './components/News';
import Question from './components/Question';

const App: () => React$Node = () => {
  let deviceWidth = Dimensions.get('window').width;
  let deviceHeight = Dimensions.get('window').height;
  const [index, setIndex] = useState(0);
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <View style={{
          height: 0.02 * deviceHeight
        }}>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <View style={{
            width: 0.05 * deviceWidth,
          }}>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('登录页面施工中')
            }}
          >
            <View style={{
              height: 0.1 * deviceWidth,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
              <View>
                <Image
                  source={require('./images/defaultUserProfile.png')}
                  style={{ width: 0.1 * deviceWidth, height: 0.1 * deviceWidth }}
                />
              </View>
              <View style={{
                width: 0.05 * deviceWidth
              }}>
              </View>
              <Text>未登录</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{
            width: 0.45 * deviceWidth
          }}>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('扫描二维码')
            }}
          >
            <View>
              <Image
                source={require('./images/QR.jpeg')}
                style={{ width: 0.05 * deviceWidth, height: 0.05 * deviceWidth }}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={{
            width: 0.05 * deviceWidth
          }}></View>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('查看新消息')
            }}
          >
            <View>
              <Image
                source={require('./images/mail.jpg')}
                style={{ width: 0.06 * deviceWidth, height: 0.05 * deviceWidth }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{
          height: 0.02 * deviceHeight
        }}>
        </View>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'stretch',
          }}>
            <View style={{
              flex: 0.2
            }}>
            </View>
            <TextInput style={{
              flex: 2,
              height: 0.04 * deviceHeight,
              borderColor: 'gray',
              borderWidth: 1,
              color: 'gray',
            }}
              defaultValue='  心联心，战疫情'
              clearTextOnFocus={true}
            />
            <View style={{
              flex: 0.2
            }}>
            </View>
          </View>
        </View>
        <View style={{
          height: 0.02 * deviceHeight
        }}>
        </View>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <View>
            <SegmentedControl style={{
              width: 0.9 * deviceWidth,
            }}
              values={['新闻', '动态', '提问']}
              // selectedIndex={0}
              selectedIndex={index}
              onChange={(event) => {
                setIndex(event.nativeEvent.selectedSegmentIndex);
              }}
            />
          </View>
          <View style={{
            height: 0.02 * deviceHeight
          }}>
          </View>
          <View style={{
            width: 0.9 * deviceWidth,
            height: 0.7 * deviceHeight,
            backgroundColor: 'blue',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#EEEEEF'
          }}>
            <ScrollView style={{
              width: 0.85 * deviceWidth,
            }}>
              <View>
                {/* <ContentSelector */}
                  {/* // index={index} */}
                {/* // /> */}
              </View>
              <View style={{
                height: 0.015 * deviceHeight
              }}>
              </View>
              <View style={{
                width: 0.85 * deviceWidth,
                height: 0.5 * deviceHeight,
              }}>
                <WebView
                  source={{ uri: 'https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner' }}
                />
              </View>
              <View style={{
                height: 0.02 * deviceHeight,
              }}>
              </View>
              <View>
                <News
                  image={'https://pic4.zhimg.com/v2-954e4967bbcb90f3bfe887ce9d70cf8f_b.jpg'}
                  title={'原以为疫情快要结束了，可它带来的水深火热，才刚刚开始。'}
                />
              </View>
              <View style={{
                height: 0.02 * deviceHeight,
              }}>
              </View>
              <View>
                <News
                  image={'https://pic2.zhimg.com/80/v2-0f2a909ac45b7bf115fbc0e5bb80b0b6_720w.jpg?source=1940ef5c'}
                  title={'这次疫情除了中国，哪个国家表现最好？'}
                />
              </View>
              <View style={{
                height: 0.02 * deviceHeight,
              }}>
              </View>
              <View>
                <News
                  image={'https://pic1.zhimg.com/80/v2-ca3d85fee97ba57af8d693f697318bd3_720w.jpg?source=1940ef5c'}
                  title={'这次疫情给中国带来哪些正面影响？'}
                />
              </View>
              <View style={{
                height: 0.02 * deviceHeight,
              }}>
              </View>
              <View>
                <Question
                  question={'怎样正确戴口罩？'}
                  answer={'……'}
                />
              </View>
              <View style={{
                height: 0.02 * deviceHeight,
              }}>
              </View>
              <View>
                <Question
                  question={'居家隔离要注意什么？'}
                  answer={'……'}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  demo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

export default App;
