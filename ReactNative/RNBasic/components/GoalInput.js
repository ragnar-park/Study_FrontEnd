import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (

        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder='your course goal!' 
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            {/* Button은 스타일 프로퍼티를 지원하지 않음 */}
            <Button onPress={addGoalHandler} title='Add Goal'/>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
})