import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal!' onChangeText={goalInputHandler}/>
        {/* Button은 스타일 프로퍼티를 지원하지 않음 */}
        <Button onPress={addGoalHandler} title='Add Goal'/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

// 아래에 정의되었지만 jsx에서 사용할 수 있는 건 전체 코드 파일이 파싱된 후에 실행되기 때문
const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 4,
  }
});
