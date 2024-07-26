import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TaskContext } from '../TaskContext';
import AddTask from '../screens/AddTask';
import TaskList from '../screens/TaskList';
import Header from '../components/Header';
import Entry from './Entry';

const MainScreen = () => {
    const { isEntryVisible, isAddingTask } = useContext(TaskContext);
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                {isEntryVisible && !isAddingTask ? (
                    <Entry />
                ) : !isEntryVisible && !isAddingTask ? (
                    <TaskList />
                ) : (
                    <AddTask />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white"
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainScreen;
