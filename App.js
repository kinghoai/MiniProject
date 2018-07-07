import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNav } from './Navigation/TabNav';
import { FlatListComponent } from './FlatList/FlatList';
import { Detail } from './FlatList/Detail';
import { Stack } from './FlatList/Stack';
import { Home } from './Redux/Ex1/Home';

export default class App extends Component {
  render() {
    return (
      // <TabNav/>
      // <FlatListComponent/>
      // <Detail/>
      // <Stack/>
      <Home/>
    );
  }
}
