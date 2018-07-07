import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ComB } from './ComB';
export class ComA extends Component {

    clickA(){
        this.refs.comB.clickB()
    }

    render() {
        return (
            <View style={{ width:300, height:300, backgroundColor:'blue', justifyContent:'center', alignItems:'center' }}>
                
                <ComB ref="comB"/>
            </View>
        )
    }
}