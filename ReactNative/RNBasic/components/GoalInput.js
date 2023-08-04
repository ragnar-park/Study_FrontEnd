import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                style={styles.textInput} 
                placeholder='your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
            <View style={styles.buttonContainer}>
                {/* Button은 스타일 프로퍼티를 지원하지 않음 */}
                <View style={styles.button}>
                    <Button onPress={addGoalHandler} title='Add Goal' color='#b180f0'/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                </View>
            </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
      inputContainer: {
        flex: 1,
        flexDirection: 'column', // default값과 동일하여 삭제해도 무방
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
    });