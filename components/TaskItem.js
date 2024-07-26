import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TaskContext } from '../TaskContext'; // Import TaskContext for managing task state

const TaskItem = ({ task }) => {
    const { markTaskAsCompleted, removeTask } = useContext(TaskContext);

    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskContent}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.description}>{task.description}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title={task.completed ? 'Completed' : 'Complete'}
                    onPress={() => markTaskAsCompleted(task.id)}
                    color={task.completed ? 'green' : 'blue'}
                />
                <Button
                    title="Remove"
                    onPress={() => removeTask(task.id)}
                    color="red"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        elevation: 2, // Adds shadow on Android
        shadowColor: '#000', // Adds shadow on iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    taskContent: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TaskItem;
