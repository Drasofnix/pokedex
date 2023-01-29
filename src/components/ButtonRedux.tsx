import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";

const ButtonRedux = () => {

    const dispatch = useAppDispatch();

    return (
        <>
        <TouchableOpacity onPress={() => dispatch(increment())}
        style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            margin: 10
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrement())}
        style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            margin: 10
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(incrementByAmount(10))}
        style={{
            backgroundColor: 'purple',
            padding: 10,
            borderRadius: 5,
            margin: 10
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Add 10</Text>
        </TouchableOpacity>
        </>
    );
};

export default ButtonRedux;