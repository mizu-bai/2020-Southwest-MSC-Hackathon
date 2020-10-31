import React, { Component } from 'react';

import {
    Text,
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

export default class Question extends Component {
    render() {
        let deviceWidth = Dimensions.get('window').width;
        let deviceHeight = Dimensions.get('window').height;
        return (
            <View style={{
                flexDirection: 'row',
                width: 0.85 * deviceWidth,
                height: 0.15 * deviceHeight,
                backgroundColor: 'white',
            }}>
                <View style={{
                    width: 0.1 * deviceWidth
                }}>
                </View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <View style={{
                        width: 0.05 * deviceWidth
                    }}>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            color: 'red'
                        }}>{'Q: ' + this.props.question}</Text>
                    </View>
                    <View style={{
                        height: 0.02 * deviceHeight
                    }}>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            color: 'green'
                        }}
                        >{'A: ' + this.props.answer}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
