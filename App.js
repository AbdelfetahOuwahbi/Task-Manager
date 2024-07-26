import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { TaskProvider } from './TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <MainScreen />
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
