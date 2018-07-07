import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export class FlatListView extends Component {

    render() {
        const { users, onPress } = this.props;
        return (            
            <View style={styles.container}>                
                <FlatList
                    data={users}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                            onPress={()=>onPress(item)}
                            style={styles.itemContainer}
                        >
                            <Text>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
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