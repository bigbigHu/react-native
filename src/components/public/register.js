import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Picker,
  Image,
  ViewPagerAndroid
} from 'react-native';
import { SliderPager } from '../common/index';

export default class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      accountNumber: '',
      password: '',
      verifyText: '发送验证码',
      language: '',
    }
  }
  componentDidMount () {
    console.log(this);
  }
  jump = () => {
    this.props.navigation.navigate('Login');
  }
  setPages = () => {
    console.log(this.viewpager.ViewPagerAndroid);
    this.viewpager.setPage(2)
  }
  sendCode = () => {
    let Countdown = 30;
    const self = this;
    const time = setInterval(() => {
      if (Countdown) {
        Countdown -= 1;
        self.setState({
          verifyText: `倒计时（${Countdown}s）`
        });
      } else {
        clearInterval(time);
        self.setState({
          verifyText: '发送验证码'
        });
      }
    }, 1000)
  }
  render() {
    return (
      <ViewPagerAndroid
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={false}
        ref={ref => { this.viewpager = ref; }}
      >
        <View style={styles.pageStyle} key="1">
          <Text>{this.props.navigation.state.params.notice}</Text>
          <View style={styles.logo}>
            <Image source={require('../../assets/images/xiami_right.png')} />
          </View>
          <Picker
            mode='dialog'
            style={styles.textInput}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => { this.setState({ language: itemValue }); }}
          >
            <Picker.Item label="请选择" value="" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <TextInput
            style={styles.textInput}
            placeholder="请输入账号"
            onChangeText={text => { this.setState({ accountNumber: text }) }}
            value={this.state.accountNumber}
          />
          <TextInput
            style={styles.textInput}
            placeholder="请输入密码"
            onChangeText={text => { this.setState({ password: text }) }}
            value={this.state.password}
          />
          <View style={styles.verifyCode}>
            <View style={styles.flex}>
              <TextInput
                style={styles.textInput}
                placeholder="请输入手机验证码"
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.verifyBtn}
                onPress={this.sendCode}
              >
                <Text style={styles.sendCode}>{this.state.verifyText}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{paddingVertical: 10, backgroundColor: '#3782D3', alignItems: 'center'}}
            onPress={this.setPages}
          >
            <Text style={styles.registerBtn}>注册</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>注册成功</Text>
        </View>
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  pageStyle: {
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginVertical: 10
  },
  selectCss: {
    height: 40,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginVertical: 10
  },
  verifyCode: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  verifyBtn: {
    width: 100,
    paddingVertical: 10,
    backgroundColor: '#3782D3',
    marginVertical: 10,
    alignItems: 'center'
  },
  sendCode: {
    color: '#fff'
  },
  registerBtn: {
    color: '#fff'
  }
})