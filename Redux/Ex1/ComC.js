import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

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
        const { change } = this.props;
        return (
            <View style={{ width:100, height:100, backgroundColor:this.state.color, justifyContent:'center', alignItems:'center' }}>
                <TouchableOpacity onPress={()=>{
                    change();
                }}>
                <Text style={{ color: '#FFF' }}>Change Color A</Text>
                </TouchableOpacity>
            </View>
        )
    }
}