import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class ComC extends Component {
    constructor(props){
        super(props);
        this.state={
            color: 'black',
        }
    }

ChangeColorC(){
    this.setState({
        color: 'green',
    })
}

    render() {
        return (
            <View style={{ width:100, height:100, backgroundColor:this.state.color, justifyContent:'center', alignItems:'center' }}>
                
            </View>
        )
    }
}