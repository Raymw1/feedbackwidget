import { Image, Text, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native';
import { ImageProps } from 'react-native-svg';

import { styles } from './styles';

interface OptionProps extends TouchableWithoutFeedbackProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...props }: OptionProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
