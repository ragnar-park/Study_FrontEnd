import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    // 새 상태가 이전 상태에 의존하는 방법
    // setCourseGoals([...courseGoals, enteredGoalText]);
    //  상태 업데이트가 비동기적으로 처리되는 상황에서 이전 상태를 보장하는 방법
    setCourseGoals(courrentCourseGoals => [...courrentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  return (
    <View style={styles.appContainer}>
        <GoalInput  onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
      {/* <ScrollView alwaysBounceVertical={false}> */}
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
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
  goalsContainer: {
    flex: 4,
  },
});
