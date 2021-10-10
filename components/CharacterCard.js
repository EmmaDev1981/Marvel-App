import * as React from 'react';
import { Text, View,  Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail')}
	>
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        alignItems: 'center'
    },
    font: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 10,
    },
    image: {
        width: 400,
        height: 200,
      marginTop: 2,
    },
  });