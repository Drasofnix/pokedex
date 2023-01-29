import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../app/hooks";

const Counter = () => {
    const counter = useAppSelector(state => state.counter.value);
    return (
        <View style={{alignItems: 'center', padding: 30}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Counter</Text>
            <Text style={{fontSize: 92, color: 'purple', fontWeight: 'bold'}}>{counter}</Text>
        </View>
    );
}

export default Counter;