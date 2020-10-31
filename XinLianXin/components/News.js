import React, { Component } from 'react';

import {
    Text,
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

export default class News extends Component {
    render() {
        let deviceWidth = Dimensions.get('window').width;
        let deviceHeight = Dimensions.get('window').height;
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: 0.85 * deviceWidth,
                height: 0.15 * deviceHeight,
                backgroundColor: 'white',
            }}>
                <View style={{
                    width: 0.05 * deviceWidth
                }}>
                </View>
                <View>
                    <Image
                    source={{uri: this.props.image}}
                    style={{ width: 0.2 * deviceWidth, height: 0.2 * deviceWidth }} />
                </View>
                <View style={{
                  width: 0.05 * deviceWidth
                }}></View>
                <View style={{
                    width: 0.5 * deviceWidth,
                }}>
                    <Text>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}
