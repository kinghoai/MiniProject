import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export class FlatListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            refresh: true,
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((responseJson)=>this.setState({ users: responseJson }))
    .catch((e)=> console.log(e))
}

    render() {
        const { users, refresh } = this.state;

        return (
            <View style={styles.container}>                
                <FlatList
                refreshing={false}
                    data={users}
                    renderItem={({item})=>(
                        <View style={styles.itemContainer}>
                            <Text>
                                {item.name}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => String(item.id)}
                    // numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    itemContainer:{
        padding: 20,
        borderBottomWidth: 1,
    }
})