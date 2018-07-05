import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { FlatListComponent } from './FlatList';
import { Detail } from './Detail';
import { FlatListView } from './FlatListView';
export const Stack = StackNavigator({
    Home: {screen: FlatListComponent},
    Detail: {screen: Detail},
},
{headerMode: 'none'}
)