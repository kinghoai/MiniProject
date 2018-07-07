import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ComB } from './ComB';
export class ComA extends Component {
    constructor(props){
        super(props);
        this.state={
            color: 'blue',
        }
        this.changeColorA= this.changeColorA.bind(this);
    }

    clickA(){
        this.refs.comB.clickB()
    }

    changeColorA(){
        this.setState({
            color:'red',
        })
    }

    render() {
        return (
            <View style={{ width:300, height:300, backgroundColor:this.state.color, justifyContent:'center', alignItems:'center' }}>
                
                <ComB ref="comB" change={()=>this.changeColorA()}/>
            </View>
        )
    }
}