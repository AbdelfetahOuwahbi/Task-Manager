import React, { useContext } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TaskContext } from '../TaskContext';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Entry = () => {

    const { toggleIsAddingTask } = useContext(TaskContext);

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 12, color: 'grey' }}>Vous verrez vos tâches ici une fois que vous les aurez créées, pour le moment vous n'avez aucune tâche (commencez à les créer maintenant à partir du bouton ci-dessous)</Text>
            </View>
            <View style={styles.entryContainer}>
                <View>
                    <Image source={require('../assets/TasksImage2.jpg')} style={styles.image}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.text}>Organisez et suivez vos tâches en toute transparence</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} icon="checkbox-marked-circle-plus-outline" mode="contained" onPress={() => toggleIsAddingTask(true)}>
                    Ajoutez votre première tâche
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    entryContainer: {
        flex: 0.7,
        alignItems: 'center',
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
    },
    button: {
        width: screenWidth / 1.1
    }
});

export default Entry;
