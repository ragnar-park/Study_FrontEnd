import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal!' />
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

// 아래에 정의되었지만 jsx에서 사용할 수 있는 건 전체 코드 파일이 파싱된 후에 실행되기 때문
const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  }
});
