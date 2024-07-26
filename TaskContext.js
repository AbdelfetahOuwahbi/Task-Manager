import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isEntryVisible, setIsEntryVisible] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);


    //Ceci permet de charger des tâches à partir de l'asyncStorage lorsque le composant est monté
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem('tasks');
                if (storedTasks) {
                    const parsedTasks = JSON.parse(storedTasks);
                    if (parsedTasks.length === 0) {
                        console.log("Debugging --> im here in empty tasks");
                        setIsEntryVisible(true);
                    } else {
                        console.log("Debugging --> im here in filled tasks");
                        setTasks(parsedTasks);
                    }
                } else {
                    console.log("Debugging --> No task element At All");
                    setIsEntryVisible(true);
                }
            } catch (error) {
                console.error('Failed to load tasks from storage:', error);
                setIsEntryVisible(true);
            }
        };

        loadTasks();

    }, []);

    //fonction qui enregistre la tâche dans AsyncStorage
    const saveTasks = async (newTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to save tasks to storage:', error);
        }
    };

    //fonction qui permet d'ajouter une nouvelle tâche (elle invoque la méthode save task)
    const addTask = (task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        saveTasks(newTasks);
        setIsEntryVisible(false);
    };

    //fonction qui effectue la suppression d'une tâche (alert l'utilisateur avant de supprimer pour une meilleur UX)
    const removeTask = (taskId) => {
        Alert.alert(
            "Es-tu sûr?",
            "Voulez-vous vraiment supprimer cette tâche ?",
            [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                {
                    text: "Supprimer",
                    onPress: () => {
                        const newTasks = tasks.filter(task => task.id !== taskId);
                        setTasks(newTasks);
                        saveTasks(newTasks);
                        if (newTasks.length === 0) {
                            setIsEntryVisible(true);
                        }
                    },
                    style: "destructive"
                }
            ],
            { cancelable: false }
        );
    }

    //fonction qui marque une tâche comme terminée
    const markTaskAsCompleted = (taskId) => {
        const newTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: true } : task
        );
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    //fonction responsable de l'affichage de l'écran d'ajout de tâche
    const toggleIsAddingTask = (value) => {
        setIsAddingTask(value);
    };

    return (
        <TaskContext.Provider value={{ tasks, isAddingTask, toggleIsAddingTask, addTask, removeTask, markTaskAsCompleted, isEntryVisible }}>
            {children}
        </TaskContext.Provider>
    );
};