import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { ImageProps } from 'react-native-svg';

import { styles } from './styles';

interface OptionProps extends GenericTouchableProps {
  title: string;
  image: ImageProps;
}

export function Option ({ title, image, ...props }: OptionProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
