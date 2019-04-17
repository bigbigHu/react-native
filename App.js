/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  StyleSheet,
  ViewPagerAndroid,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '#fff',
      num: 0
    }
  }
  pressbtn = () => {
    console.log('11213');
    this.setState({
      num: this.state.num+1
    })
  }
  handleSubmit = () => {
    console.log(12312);
  }
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}
      >
        <View style={styles.pageStyle} key="1">
          <Image source={require('./src/assets/images/logo_zh-cn.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="请输入账号"
            placeholderTextColor={styles.placeholderColor}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="请输入密码"
            placeholderTextColor={styles.placeholderColor}
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={this.handleSubmit}
            activeOpacity={0.8}
          >
            <Text>登录</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>hello hx</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  marBottom: {
    marginBottom: 30,
  },
  container: {
    width: 260,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  touchableHighlight: {
    width: 260,
    height: 30,
    backgroundColor: '#DDD'
  },
  touchableOpacity: {
    width: 260,
    height: 30,
    backgroundColor: '#DDD'
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 5
  },
  placeholderColor: {
    color: '#555'
  },
  loginBtn: {
    backgroundColor: '#3782D3',
    alignItems: 'center',
    width: 180,
    padding: 10,
    color: '#fff',
    borderRadius: 5
  }
});
