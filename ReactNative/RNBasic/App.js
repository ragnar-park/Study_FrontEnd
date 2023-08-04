import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    // 새 상태가 이전 상태에 의존하는 방법
    // setCourseGoals([...courseGoals, enteredGoalText]);
    //  상태 업데이트가 비동기적으로 처리되는 상황에서 이전 상태를 보장하는 방법
    setCourseGoals(courrentCourseGoals => [...courrentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal!' onChangeText={goalInputHandler}/>
        {/* Button은 스타일 프로퍼티를 지원하지 않음 */}
        <Button onPress={addGoalHandler} title='Add Goal'/>
      </View>
      <View style={styles.goalsContainer}>
      {/* <ScrollView alwaysBounceVertical={false}> */}
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}> 
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
       keyExtractor={(item, index) => {
        return item.id;
       }}
       alwaysBounceVertical={false} />
      {/* </ScrollView> */}
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
