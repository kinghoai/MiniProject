import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNav } from './Navigation/TabNav';
import { FlatListComponent } from './FlatList/FlatList';

export default class App extends Component {
  render() {
    return (
      // <TabNav/>
      <FlatListComponent/> 
    );
  }
}
