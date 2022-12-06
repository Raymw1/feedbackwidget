import { View, Image, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import successImg from '../../assets/success.png';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Thanks for your feedback!</Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Send another feedback!</Text>
      </TouchableOpacity>
    </View>
  );
}
