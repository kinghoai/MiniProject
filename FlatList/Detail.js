import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export class Detail extends Component {
    render() {
        const item = this.props.navigation.getParam('item');
        
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.touchStyle}
                        onPress={()=> this.props.navigation.goBack()}
                    >
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>item.name</Text>
                </View>
                <View style= {styles.body}>
                    <Text style= {styles.bodyText}>JSON.stringify(item)</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#006699',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 19,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 30,
    },
    bodyText: {
        fontSize: 17,        
    },
    touchStyle: {
        padding: 15,
        backgroundColor: '#FFF',
        marginRight: 30,
        borderRadius: 15,
    }
})