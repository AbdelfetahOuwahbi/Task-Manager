import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, ToastAndroid } from 'react-native';
import { HelperText, Button } from 'react-native-paper';
import { TaskContext } from '../TaskContext';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AddTask = () => {
  const { addTask, toggleIsAddingTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!titleHasErrors() && title !== '' && description !== '') {
      const newTask = {
        id: Math.random().toString(),
        title,
        description,
        completed: false,
      };
      addTask(newTask);
      setTitle('');
      setDescription('');
      ToastAndroid.show('Task Added With Success !', ToastAndroid.LONG);
      toggleIsAddingTask(false);
    } else {
      console.log("Something wrong in one or both fields !!");
    }
  };

  const titleHasErrors = () => {
    const regex = /\d/;
    return regex.test(title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backHandlerContainer}>
        <Button style={{width : screenWidth/3}} icon="arrow-left" mode="contained" onPress={() => toggleIsAddingTask(false)}>
          Back
        </Button>
      </View>
      <View style={styles.helperText}>
        <Text style={styles.text}>You can add a task by specifying the title and the description</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/AddTaskImage.png')} style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.titleContainer}>
            <TextInput
              placeholder="Title"
              style={styles.title}
              value={title}
              onChangeText={setTitle}
              maxLength={50}
            />
          </View>
          <HelperText type="error" visible={titleHasErrors()}>
            Title should not contain numbers
          </HelperText>

          <View style={styles.descriptionContainer}>
            <TextInput
              placeholder="type the description here ..."
              style={styles.description}
              value={description}
              onChangeText={setDescription}
              multiline
              maxLength={200}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    marginTop : screenHeight/20
  },
  backHandlerContainer: {
    width: screenWidth,
    height : screenHeight/14,
    justifyContent : 'center',
    marginLeft: screenWidth / 20,
  },
  helperText: {
    width: screenWidth,
    height : screenHeight/14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'italic'
  },
  card: {
    width: screenWidth/1.05,
    height : screenHeight*9/14,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
  imageContainer: {
    flex: 0.3,
    width: screenWidth / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  image: {
    width: screenWidth / 2.5,
    height: screenHeight / 7
  },
  infosContainer: {
    flex: 0.5,
    width: screenWidth / 1.2,
    // backgroundColor: 'purple'
  },
  titleContainer: {
    justifyContent: 'center',
    width: screenWidth / 1.2,
    height: screenHeight / 20,
    borderWidth: screenWidth / 700,
    borderRadius: screenWidth / 80,
    borderColor: 'grey'
  },
  title: {
    marginLeft: screenWidth / 30,
    fontSize: 14
  },
  descriptionContainer: {
    width: screenWidth / 1.2,
    height: screenHeight / 8,
    borderWidth: screenWidth / 700,
    borderRadius: screenWidth / 80,
    borderColor: 'grey'
  },
  description: {
    marginLeft: screenWidth / 30,
    marginTop: 6,
    fontSize: 14,
    width: screenWidth / 1.3,
    height: screenHeight / 6.5,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    flex: 0.2,
    width: screenWidth / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
    // backgroundColor : 'green',
  },
  button: {
    width: screenWidth / 1.2
  }
});

export default AddTask;
