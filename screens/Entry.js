import React, { useContext } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TaskContext } from '../TaskContext';
import AddTask from './AddTask';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Entry = () => {

    const { isAddingTask, toggleIsAddingTask } = useContext(TaskContext);

    return (
        <View style={styles.container}>
            <View style={{flex : 0.2, justifyContent : 'center', alignItems:'center', paddingHorizontal : 20}}>
                <Text style={{fontSize : 12, color : 'grey'}}>you will see your tasks here once you create them for the moment you do not have any tasks (start creating them Now)</Text>
            </View>
            <View style={styles.entryContainer}>
                <View>
                    <Image source={require('../assets/TasksImage2.jpg')} style={styles.image}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.text}>Organize and Track Your Tasks Seamlessly</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} icon="checkbox-marked-circle-plus-outline" mode="contained" onPress={() => toggleIsAddingTask(true)}>
                    Add your first Task
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        // backgroundColor: 'pink'
    },
    entryContainer: {
        flex : 0.7,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    image: {
        width: screenWidth,
        height: screenHeight / 2,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey',
    },
    buttonContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
        // backgroundColor: 'purple',
    },
    button: {
        width: screenWidth / 1.1
    }
});

export default Entry;
