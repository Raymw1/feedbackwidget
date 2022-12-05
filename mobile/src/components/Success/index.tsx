import { View, Image, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import successImg from '../../assets/success.png';

export function Success() {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Thanks for your feedback!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Send other feedback!</Text>
      </TouchableOpacity>
    </View>
  );
}
