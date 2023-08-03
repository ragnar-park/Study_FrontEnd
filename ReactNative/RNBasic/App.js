import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another piece of text!</Text>
      </View>
      <Text style={styles.dummyText}>Heloo World!</Text>
      <Button title='Tab me!'/>
    </View>
  );
}

// 아래에 정의되었지만 jsx에서 사용할 수 있는 건 전체 코드 파일이 파싱된 후에 실행되기 때문
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, borderWidth: 1, borderColor: 'blue', padding: 16
  }
});
