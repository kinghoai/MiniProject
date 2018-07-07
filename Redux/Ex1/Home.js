import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ComA } from './ComA';
export class Home extends Component {
    render() {
        return (
            <View style={{ justifyContent:'center', alignItems:'center' }}>
            <TouchableOpacity onPress={()=>{
                this.refs.comA.clickA();
            }}>
                    <Text>Click to change color</Text>
                </TouchableOpacity>
                <ComA ref="comA"/>
            </View>
            
        )
    }
}