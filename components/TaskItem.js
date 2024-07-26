import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { TaskContext } from '../TaskContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TaskItem = ({ task }) => {
    const { markTaskAsCompleted, removeTask } = useContext(TaskContext);

    return (
        <View style={styles.taskContainer}>
            <View style={styles.statusContainer}>
                {task.completed ? (
                    <AntDesign style={{ marginLeft: screenWidth / 30 }} name="check" size={24} color="green" />
                ) : (
                    <MaterialIcons style={{ marginLeft: screenWidth / 30 }} name="pending-actions" size={24} color="orange" />
                )}
                <Text style={{ marginLeft: screenWidth / 100, fontStyle: 'italic', fontSize: 16, color: (task.completed ? "green" : "orange") }}>{task.completed ? "completed" : "pending"}</Text>
            </View>
            <View style={styles.contentConatiner}>
                <Text style={{fontSize: 18, fontWeight: 'bold',}}>{task.title}</Text>
                <Text style={{fontSize: 15, fontWeight: '400',}}>{task.description}</Text>
            </View>
            <View style={styles.actionsContainer}>
                <TouchableOpacity disabled={task.completed} onPress={() => markTaskAsCompleted(task.id)} style={styles.completedButtonContainer}>
                    <Text>{task.completed ? "terminé" : "marquer comme terminé"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeTask(task.id)} style={styles.removeButtonContainer}>
                    <Text>Supprimer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        width: screenWidth / 1.1,
        height: screenHeight / 3.6,
        marginTop: screenHeight / 50,
        backgroundColor: '#F0EFEF',
        borderRadius: screenWidth / 50,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
    },
    statusContainer: {
        flex: 0.15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentConatiner: {
        flex: 0.65,
        justifyContent: 'space-evenly',
        paddingHorizontal : screenWidth/80,
        flexDirection: 'column',
    },
    actionsContainer: {
        flex: 0.2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: screenWidth / 30,
    },
    completedButtonContainer: {
        width: screenWidth / 2.3,
        height: screenHeight / 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        backgroundColor: '#1BC14D',
        borderRadius: screenWidth / 80,
    },
    removeButtonContainer: {
        width: screenWidth / 3.5,
        height: screenHeight / 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        backgroundColor: '#FF373E',
        borderRadius: screenWidth / 80,
    }
});

export default TaskItem;
