import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = props => {
    const [enteredGoal, setEnterGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnterGoal('');

    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContaniner}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                </View>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContaniner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }

});
export default GoalInput;