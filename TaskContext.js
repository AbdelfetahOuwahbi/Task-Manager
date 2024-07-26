import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isEntryVisible, setIsEntryVisible] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);


    useEffect(() => {
        const loadTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem('tasks');
                if (storedTasks) {
                    const parsedTasks = JSON.parse(storedTasks);
                    if (parsedTasks.length === 0) {
                        console.log("im here in empty tasks");
                        setIsEntryVisible(true);
                    } else {
                        console.log("im here in filled tasks");
                        setTasks(parsedTasks);
                    }
                } else {
                    console.log("No task element At All");
                    setIsEntryVisible(true);
                }
            } catch (error) {
                console.error('Failed to load tasks from storage:', error);
                setIsEntryVisible(true);
            }
        };

        loadTasks();

    }, []);

    const saveTasks = async (newTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to save tasks to storage:', error);
        }
    };

    const addTask = (task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        saveTasks(newTasks);
        setIsEntryVisible(false);
    };

    const removeTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
        saveTasks(newTasks);
        if (newTasks.length === 0) {
            setIsEntryVisible(true);
        }
    };

    const markTaskAsCompleted = (taskId) => {
        const newTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: true } : task
        );
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    const toggleIsAddingTask = (value) => {
        setIsAddingTask(value);
    };

    return (
        <TaskContext.Provider value={{ tasks, isAddingTask, toggleIsAddingTask, addTask, removeTask, markTaskAsCompleted, isEntryVisible }}>
            {children}
        </TaskContext.Provider>
    );
};