import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { TaskContext } from '../TaskContext';
import TaskItem from '../components/TaskItem';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TaskList = () => {
  const { tasks, toggleIsAddingTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} icon="checkbox-marked-circle-plus-outline" mode="contained" onPress={() => toggleIsAddingTask(true)}>
          Add new Task
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    flex : 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor : 'grey',
    borderTopWidth : 0.5,
    // backgroundColor: 'purple',
  },
  button: {
    width: screenWidth / 1.1
  }
});

export default TaskList;
