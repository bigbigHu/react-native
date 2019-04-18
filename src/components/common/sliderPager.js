import React, { Component } from 'react';
import {
  ViewPagerAndroid,
  StyleSheet
} from 'react-native';

export default class SliderPager extends Component {
  render() {
    return (
      <ViewPagerAndroid
        {...this.props}
        style={styles.viewPager}
        initialPage={0}
      >
        {this.props.children}
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
})