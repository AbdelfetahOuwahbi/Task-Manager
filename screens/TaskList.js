import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { TaskContext } from '../TaskContext';
import TaskItem from '../components/TaskItem';

const screenWidth = Dimensions.get('window').width;

const TaskList = () => {
  const { tasks, toggleIsAddingTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Liste des tâches </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.tasksContainer}>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} icon="checkbox-marked-circle-plus-outline" mode="contained" onPress={() => toggleIsAddingTask(true)}>
          Ajouter une nouvelle tâche
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
  tasksContainer: {
    flex: 0.8,
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
  },
  button: {
    width: screenWidth / 1.1
  }
});

export default TaskList;
