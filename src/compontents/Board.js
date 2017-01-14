import React, { Component } from 'react';
import Column from './Column';
import ReactTimeout from 'react-timeout'

import {
  View,
  PanResponder,
  ScrollView,
  TouchableWithoutFeedback,
  Text
} from 'react-native';

class Board extends React.Component {
  constructor(props) {
    super(props);

    const data = [
      { title: 'item1' },
      { title: 'item2' },
      { title: 'item3' }
    ]

    this.state = {
      data: data
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.onPanResponderMove.bind(this),
      onPanResponderRelease: this.onPanResponderRelease.bind(this),
      onPanResponderTerminate: this.onPanResponderRelease.bind(this)
    })
  }

  onPanResponderMove(event, gesture) {
    console.log('MOVE!!')
  }

  onPanResponderRelease(e, gesture) {
    console.log('RELEASE')
  }

  onPressIn() {
    this.movingSubscription = this.props.setTimeout(() => {
      this.setState({
        data: []
      });
    }, 2000)
  }

  renderRow(item) {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
      >
        <View style={{ height: 30 }}>
          <Text>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render() {
    return (
      <ScrollView
        style={{ marginTop: 30 }}
        scrollEnabled={false}
        horizontal={true}
        {...this.panResponder.panHandlers}
      >
        <Column
          data={this.state.data}
          onPressIn={this.onPressIn.bind(this)}
          renderRow={this.renderRow.bind(this)}
        />
      </ScrollView>
    )
  }
};

export default ReactTimeout(Board);
