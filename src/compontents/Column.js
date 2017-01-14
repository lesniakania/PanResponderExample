import React, { Component } from 'react';

import {
  ListView,
} from 'react-native';

class Column extends React.Component {
  rowHasChanged(item1, item2) {
    return item1.row !== item2.row;
  }

  dataSourceWithItems(items) {
    const ds = new ListView.DataSource({ rowHasChanged: this.rowHasChanged });
    return ds.cloneWithRows(items);
  }

  render() {
    let dataSource = this.dataSourceWithItems(this.props.data);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.props.renderRow}
        scrollEnabled={false}
        enableEmptySections={true}
      />
    )
  }
};

export default Column;
