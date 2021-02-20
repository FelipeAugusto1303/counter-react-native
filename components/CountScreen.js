import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {
    addValue,
    resetValue
} from '../Actions'

import {useDispatch, useSelector} from 'react-redux'

export default CountScreen = () => {
    const value = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    const countPushs = () => {
        dispatch(addValue())
    }

    const resetPushs = () => {
        dispatch(resetValue())
    }

    return(
        <View>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>{value}</Text>
            </View>
            <View style={styles.appButtons}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => countPushs()}>
                    <Text style={styles.pushText}>Push ups</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{resetPushs()}} style={styles.buttonReset}>
                    <Text style={styles.resetText}>reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    countContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:70
    },
    countText:{
        fontSize: 90,
        fontWeight: 'bold'
    },
    pushText:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    appButtons:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
    },
    buttonContainer: {
        backgroundColor: "#f00",
        height: 250,
        width: 250,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonReset:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0fc9f7',
        height: 70,
        width: 150,
        borderRadius: 20,
        marginTop: 15
    },
    resetText:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    }
})

