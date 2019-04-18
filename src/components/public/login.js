import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { SliderPager } from '../common/index';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '#fff',
      num: 0,
      password: '',
      accountNumber: '',
    }
  }
  jump = () => {
    this.props.navigation.navigate('Register', {'notice': '我是从登陆页路由带来的信息'});
  }
  handleSubmit = () => {
    console.log(this.state);
    const { accountNumber, password } = this.state;
    if (!accountNumber || !password) {
      alert('请检查账号密码是否存在');
    }
  }
  render() {
    return (
      <SliderPager>
        <View style={styles.pageStyle} key="1">
          <View style={styles.logo}>
            <Image source={require('../../assets/images/xiami_right.png')} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="请输入账号"
            placeholderTextColor={styles.placeholderColor}
            onChangeText={(accountNumber) => { this.setState({ accountNumber }) }}
            value={this.state.accountNumber}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="请输入密码"
            placeholderTextColor={styles.placeholderColor}
            onChangeText={(password) => { this.setState({ password }) }}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={this.handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={{color: '#fff'}}>登录</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pageStyle} key="2">
          <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.jump}
              activeOpacity={0.8}
            >
            <Text style={{color: '#fff'}}>注册</Text>
          </TouchableOpacity>
        </View>
      </SliderPager>
    );
  }
}

const styles = StyleSheet.create({
  marBottom: {
    marginBottom: 30,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
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
  pageStyle: {
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginVertical: 10
  },
  placeholderColor: {
    color: '#555'
  },
  loginBtn: {
    marginTop: 10,
    backgroundColor: '#3782D3',
    alignItems: 'center',
    // height: 30,
    paddingVertical: 15,
    borderRadius: 5
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40
  }
});
