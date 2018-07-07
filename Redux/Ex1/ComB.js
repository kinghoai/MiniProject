import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { ComC } from './ComC';
export class ComB extends Component {

    clickB(){
        this.refs.comC.ChangeColorC()
    }

    render() {
        const { change } = this.props;
        return (
            <View style={{ width:200, height:200, backgroundColor:'yellow', justifyContent:'center', alignItems:'center' }}>
                <ComC ref="comC" change={change}/>
            </View>
        )
    }
}