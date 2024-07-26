import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TaskContext } from '../TaskContext';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Task Manager</Text>
      <Image source={require('../assets/TasksImage.png')} style={styles.image}
        resizeMode='contain'
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight / 7,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight : screenWidth/40,
  },
  image: {
    width: screenWidth/10,
    height: screenHeight / 10,
  },
});

export default Header;
